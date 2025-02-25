"use strict";
//
//    on 19/4/11.
//
//
//
var _ = require('lodash');
function getStreams(req, res, next) {
    var stats = {};
    this.sessions.forEach(function (session, id) {
        if (session.constructor.name !== 'NodeRelaySession') {
            return;
        }
        var _a = session.conf, app = _a.app, name = _a.name;
        if (!_.get(stats, [app, name])) {
            _.set(stats, [app, name], {
                relays: []
            });
        }
        _.set(stats, [app, name, 'relays'], {
            app: app,
            name: name,
            url: session.conf.ouPath,
            mode: session.conf.mode,
            id: session.id,
        });
    });
    res.json(stats);
}
function pullStream(req, res, next) {
    var url = req.body.url;
    var app = req.body.app;
    var name = req.body.name;
    if (url && app && name) {
        this.nodeEvent.emit('relayPull', url, app, name);
        res.sendStatus(200);
    }
    else {
        res.sendStatus(400);
    }
}
function pushStream(req, res, next) {
    var url = req.body.url;
    var app = req.body.app;
    var name = req.body.name;
    if (url && app && name) {
        this.nodeEvent.emit('relayPush', url, app, name);
        res.sendStatus(200);
    }
    else {
        res.sendStatus(400);
    }
}
module.exports = {
    getStreams: getStreams,
    pullStream: pullStream,
    pushStream: pushStream
};
