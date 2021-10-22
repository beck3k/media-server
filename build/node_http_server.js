"use strict";
var Fs = require('fs');
var path = require('path');
var Http = require('http');
var Https = require('https');
var WebSocket = require('ws');
var Express = require('express');
var bodyParser = require('body-parser');
var basicAuth = require('basic-auth-connect');
var CryptoJS = require("crypto-js");
var NodeFlvSession = require('./node_flv_session');
var HTTP_PORT = 80;
var HTTPS_PORT = 443;
var HTTP_MEDIAROOT = './media';
var Logger = require('./node_core_logger');
var context = require('./node_core_ctx');
var ip = require("ip");
var streamsRoute = require('./api/routes/streams');
var serverRoute = require('./api/routes/server');
var relayRoute = require('./api/routes/relay');
var NodeHttpServer = /** @class */ (function () {
    function NodeHttpServer(config) {
        var _this = this;
        this.port = config.http.port || HTTP_PORT;
        this.mediaroot = config.http.mediaroot || HTTP_MEDIAROOT;
        this.config = config;
        if (this.config.cdn_url === false) {
            this.config.cdn_url = "http://" + ip.address();
        }
        if (this.config.rtmp_url === false) {
            this.config.rtmp_url = "rtmp://" + ip.address();
        }
        var app = Express();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.engine('html', require('ejs').renderFile);
        app.set('view engine', 'html');
        app.set('views', __dirname);
        app.all('*.ts', function (req, res, next) {
            res.header("Access-Control-Allow-Origin", _this.config.http.allow_origin);
            res.header("Access-Control-Allow-Headers", "Content-Length,Authorization,Accept,DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range");
            res.header("Access-Control-Allow-Methods", "GET,OPTIONS");
            res.header("Access-Control-Allow-Credentials", true);
            res.header("Cache-Control", "public,max-age=5m,s-maxage=5m");
            req.method === "OPTIONS" ? res.sendStatus(200) : next();
        });
        app.get('*.m3u8', function (req, res, next) {
            res.header("Access-Control-Allow-Origin", _this.config.http.allow_origin);
            res.header("Access-Control-Allow-Headers", "Content-Length,Authorization,Accept,DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range");
            res.header("Access-Control-Allow-Methods", "GET,OPTIONS");
            res.header("Access-Control-Allow-Credentials", true);
            res.header("Cache-Control", "public,max-age=5s,s-maxage=5s");
            req.method === "OPTIONS" ? res.sendStatus(200) : next();
        });
        app.get('*.flv', function (req, res, next) {
            req.nmsConnectionType = 'http';
            _this.onConnect(req, res);
        });
        var adminEntry = path.join(__dirname + '/public/admin/index.html');
        if (Fs.existsSync(adminEntry)) {
            app.get('/admin/*', function (req, res) {
                res.sendFile(adminEntry);
            });
        }
        app.get('/', function (req, res) {
            res.header("Cache-Control", "no-store, max-age=0");
            var name = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < 8; i++) {
                name += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            var md5 = CryptoJS.SHA256(_this.config.passphrase + "/live/" + name).toString();
            var key = name + "?pwd=" + md5.substring(0, 6);
            res.render("views/index.html", { name: name, key: key, rtmp_url: _this.config.rtmp_url, cdn_url: _this.config.cdn_url });
        });
        app.get('/v/:id', function (req, res) {
            res.render("views/channel.html", { name: req.params.id, cdn_url: _this.config.cdn_url });
        });
        if (this.config.http.api !== false) {
            if (this.config.auth && this.config.auth.api) {
                app.use(['/api/*', '/admin/*'], basicAuth(this.config.auth.api_user, this.config.auth.api_pass));
            }
            app.use('/api/streams', streamsRoute(context));
            app.use('/api/server', serverRoute(context));
            app.use('/api/relay', relayRoute(context));
        }
        app.use(Express.static(path.join(__dirname + '/public')));
        app.use(Express.static(this.mediaroot));
        if (config.http.webroot) {
            app.use(Express.static(config.http.webroot));
        }
        this.httpServer = Http.createServer(app);
        /**
         * ~ openssl genrsa -out privatekey.pem 1024
         * ~ openssl req -new -key privatekey.pem -out certrequest.csr
         * ~ openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem
         */
        if (this.config.https) {
            var options = {
                key: Fs.readFileSync(this.config.https.key),
                cert: Fs.readFileSync(this.config.https.cert)
            };
            this.sport = config.https.port ? config.https.port : HTTPS_PORT;
            this.httpsServer = Https.createServer(options, app);
        }
    }
    NodeHttpServer.prototype.run = function () {
        var _this = this;
        this.httpServer.listen(this.port, function () {
            Logger.log("Media Server - Http Server started on port: " + _this.port);
        });
        this.httpServer.on('error', function (e) {
            Logger.error("Media Server - Http Server " + e);
        });
        this.httpServer.on('close', function () {
            Logger.log('Media Server - Http Server Close.');
        });
        this.wsServer = new WebSocket.Server({ server: this.httpServer });
        this.wsServer.on('connection', function (ws, req) {
            req.nmsConnectionType = 'ws';
            _this.onConnect(req, ws);
        });
        this.wsServer.on('listening', function () {
            Logger.log("Media Server - WebSocket Server started on port: " + _this.port);
        });
        this.wsServer.on('error', function (e) {
            Logger.error("Media Server - WebSocket Server " + e);
        });
        if (this.httpsServer) {
            this.httpsServer.listen(this.sport, function () {
                Logger.log("Media Server - Https Server started on port: " + _this.sport);
            });
            this.httpsServer.on('error', function (e) {
                Logger.error("Media Server - Https Server " + e);
            });
            this.httpsServer.on('close', function () {
                Logger.log('Media Server - Https Server Close.');
            });
            this.wssServer = new WebSocket.Server({ server: this.httpsServer });
            this.wssServer.on('connection', function (ws, req) {
                req.nmsConnectionType = 'ws';
                _this.onConnect(req, ws);
            });
            this.wssServer.on('listening', function () {
                Logger.log("Media Server - WebSocketSecure Server started on port: " + _this.sport);
            });
            this.wssServer.on('error', function (e) {
                Logger.error("Media Server - WebSocketSecure Server " + e);
            });
        }
        context.nodeEvent.on('postPlay', function (id, args) {
            context.stat.accepted++;
        });
        context.nodeEvent.on('postPublish', function (id, args) {
            context.stat.accepted++;
        });
        context.nodeEvent.on('doneConnect', function (id, args) {
            var session = context.sessions.get(id);
            var socket = session instanceof NodeFlvSession ? session.req.socket : session.socket;
            context.stat.inbytes += socket.bytesRead;
            context.stat.outbytes += socket.bytesWritten;
        });
    };
    NodeHttpServer.prototype.stop = function () {
        this.httpServer.close();
        if (this.httpsServer) {
            this.httpsServer.close();
        }
        context.sessions.forEach(function (session, id) {
            if (session instanceof NodeFlvSession) {
                session.req.destroy();
                context.sessions.delete(id);
            }
        });
    };
    NodeHttpServer.prototype.onConnect = function (req, res) {
        var session = new NodeFlvSession(this.config, req, res);
        session.run();
    };
    return NodeHttpServer;
}());
module.exports = NodeHttpServer;
