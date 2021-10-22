"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Logger = require('./node_core_logger');
var NodeCoreUtils = require("./node_core_utils");
var EventEmitter = require('events');
var spawn = require('child_process').spawn;
var RTSP_TRANSPORT = ['udp', 'tcp', 'udp_multicast', 'http'];
var NodeRelaySession = /** @class */ (function (_super) {
    __extends(NodeRelaySession, _super);
    function NodeRelaySession(conf) {
        var _this = _super.call(this) || this;
        _this.conf = conf;
        _this.id = NodeCoreUtils.generateNewSessionID();
        _this.TAG = 'relay';
        return _this;
    }
    NodeRelaySession.prototype.run = function () {
        var _this = this;
        var format = this.conf.ouPath.startsWith('rtsp://') ? 'rtsp' : 'flv';
        var argv = ['-i', this.conf.inPath, '-c', 'copy', '-f', format, this.conf.ouPath];
        if (this.conf.inPath[0] === '/' || this.conf.inPath[1] === ':') {
            argv.unshift('-1');
            argv.unshift('-stream_loop');
            argv.unshift('-re');
        }
        if (this.conf.inPath.startsWith('rtsp://') && this.conf.rtsp_transport) {
            if (RTSP_TRANSPORT.indexOf(this.conf.rtsp_transport) > -1) {
                argv.unshift(this.conf.rtsp_transport);
                argv.unshift('-rtsp_transport');
            }
        }
        Logger.ffdebug(argv.toString());
        this.ffmpeg_exec = spawn(this.conf.ffmpeg, argv);
        this.ffmpeg_exec.on('error', function (e) {
            Logger.ffdebug(e);
        });
        this.ffmpeg_exec.stdout.on('data', function (data) {
            Logger.ffdebug("FF\u8F93\u51FA\uFF1A" + data);
        });
        this.ffmpeg_exec.stderr.on('data', function (data) {
            Logger.ffdebug("FF\u8F93\u51FA\uFF1A" + data);
        });
        this.ffmpeg_exec.on('close', function (code) {
            Logger.log('[Relay end] id=', _this.id);
            _this.emit('end', _this.id);
        });
    };
    NodeRelaySession.prototype.end = function () {
        this.ffmpeg_exec.kill();
    };
    return NodeRelaySession;
}(EventEmitter));
module.exports = NodeRelaySession;
