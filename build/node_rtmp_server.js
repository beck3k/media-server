"use strict";
var Logger = require('./node_core_logger');
var Tls = require('tls');
var Fs = require('fs');
var Net = require('net');
var NodeRtmpSession = require('./node_rtmp_session');
var NodeCoreUtils = require('./node_core_utils');
var context = require('./node_core_ctx');
var RTMP_PORT = 1935;
var RTMPS_PORT = 443;
var NodeRtmpServer = /** @class */ (function () {
    function NodeRtmpServer(config) {
        config.rtmp.port = this.port = config.rtmp.port ? config.rtmp.port : RTMP_PORT;
        this.tcpServer = Net.createServer(function (socket) {
            var session = new NodeRtmpSession(config, socket);
            session.run();
        });
        if (config.rtmp.ssl) {
            config.rtmp.ssl.port = this.sslPort = config.rtmp.ssl.port ? config.rtmp.ssl.port : RTMPS_PORT;
            try {
                var options = {
                    key: Fs.readFileSync(config.rtmp.ssl.key),
                    cert: Fs.readFileSync(config.rtmp.ssl.cert)
                };
                this.tlsServer = Tls.createServer(options, function (socket) {
                    var session = new NodeRtmpSession(config, socket);
                    session.run();
                });
            }
            catch (e) {
                Logger.error("Media Server - Rtmps Server error while reading ssl certs: <" + e + ">");
            }
        }
    }
    NodeRtmpServer.prototype.run = function () {
        var _this = this;
        this.tcpServer.listen(this.port, function () {
            Logger.log("Media Server - Rtmp Server started on port: " + _this.port);
        });
        this.tcpServer.on('error', function (e) {
            Logger.error("Media Server - Rtmp Server " + e);
        });
        this.tcpServer.on('close', function () {
            Logger.log("Media Server - Rtmp Server Close.");
        });
        if (this.tlsServer) {
            this.tlsServer.listen(this.sslPort, function () {
                Logger.log("Media Server - Rtmps Server started on port: " + _this.sslPort);
            });
            this.tlsServer.on('error', function (e) {
                Logger.error("Media Server - Rtmps Server " + e);
            });
            this.tlsServer.on('close', function () {
                Logger.log("Media Server - Rtmps Server Close.");
            });
        }
    };
    NodeRtmpServer.prototype.stop = function () {
        this.tcpServer.close();
        if (this.tlsServer) {
            this.tlsServer.close();
        }
        context.sessions.forEach(function (session, id) {
            if (session instanceof NodeRtmpSession)
                session.stop();
        });
    };
    return NodeRtmpServer;
}());
module.exports = NodeRtmpServer;
