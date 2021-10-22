"use strict";
var Https = require('https');
var Logger = require('./node_core_logger');
var NodeRtmpServer = require('./node_rtmp_server');
var NodeHttpServer = require('./node_http_server');
var NodeTransServer = require('./node_trans_server');
var NodeRelayServer = require('./node_relay_server');
var NodeFissionServer = require('./node_fission_server');
var context = require('./node_core_ctx');
var Package = require("../package.json");
var NodeMediaServer = /** @class */ (function () {
    function NodeMediaServer(config) {
        this.config = config;
    }
    NodeMediaServer.prototype.run = function () {
        Logger.setLogType(this.config.logType);
        Logger.log("Media Server - Server v" + Package.version);
        if (this.config.rtmp) {
            this.nrs = new NodeRtmpServer(this.config);
            this.nrs.run();
        }
        if (this.config.http) {
            this.nhs = new NodeHttpServer(this.config);
            this.nhs.run();
        }
        if (this.config.trans) {
            if (this.config.cluster) {
                Logger.log('NodeTransServer does not work in cluster mode');
            }
            else {
                this.nts = new NodeTransServer(this.config);
                this.nts.run();
            }
        }
        if (this.config.relay) {
            if (this.config.cluster) {
                Logger.log('NodeRelayServer does not work in cluster mode');
            }
            else {
                this.nls = new NodeRelayServer(this.config);
                this.nls.run();
            }
        }
        if (this.config.fission) {
            if (this.config.cluster) {
                Logger.log('NodeFissionServer does not work in cluster mode');
            }
            else {
                this.nfs = new NodeFissionServer(this.config);
                this.nfs.run();
            }
        }
        process.on('uncaughtException', function (err) {
            Logger.error('uncaughtException', err);
        });
        Https.get("https://registry.npmjs.org/node-media-server", function (res) {
            var size = 0;
            var chunks = [];
            res.on('data', function (chunk) {
                size += chunk.length;
                chunks.push(chunk);
            });
        }).on('error', function (e) {
        });
    };
    NodeMediaServer.prototype.on = function (eventName, listener) {
        context.nodeEvent.on(eventName, listener);
    };
    NodeMediaServer.prototype.stop = function () {
        if (this.nrs) {
            this.nrs.stop();
        }
        if (this.nhs) {
            this.nhs.stop();
        }
        if (this.nls) {
            this.nls.stop();
        }
        if (this.nfs) {
            this.nfs.stop();
        }
    };
    NodeMediaServer.prototype.getSession = function (id) {
        return context.sessions.get(id);
    };
    return NodeMediaServer;
}());
module.exports = NodeMediaServer;
