const Https = require('https');
const Logger = require('./node_core_logger');
const NodeRtmpServer = require('./node_rtmp_server');
const NodeHttpServer = require('./node_http_server');
const NodeTransServer = require('./node_trans_server');
const NodeRelayServer = require('./node_relay_server');
const NodeFissionServer = require('./node_fission_server');
const context = require('./node_core_ctx');
const Package = require("../package.json");

class NodeMediaServer {
  constructor(config) {
    this.config = config;
  }

  run() {
    Logger.setLogType(this.config.logType);
    Logger.log(`Media Server - Server v${Package.version}`);
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
      } else {
        this.nts = new NodeTransServer(this.config);
        this.nts.run();
      }
    }

    if (this.config.relay) {
      if (this.config.cluster) {
        Logger.log('NodeRelayServer does not work in cluster mode');
      } else {
        this.nls = new NodeRelayServer(this.config);
        this.nls.run();
      }
    }

    if (this.config.fission) {
      if (this.config.cluster) {
        Logger.log('NodeFissionServer does not work in cluster mode');
      } else {
        this.nfs = new NodeFissionServer(this.config);
        this.nfs.run();
      }
    }

    process.on('uncaughtException', function (err) {
      Logger.error('uncaughtException', err);
    });

    Https.get("https://registry.npmjs.org/node-media-server", function (res) {
      let size = 0;
      let chunks = [];
      res.on('data', function (chunk) {
        size += chunk.length;
        chunks.push(chunk);
      });
    }).on('error', function (e) {
    });
  }

  on(eventName, listener) {
    context.nodeEvent.on(eventName, listener);
  }

  stop() {
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
  }

  getSession(id) {
    return context.sessions.get(id);
  }
}

module.exports = NodeMediaServer
