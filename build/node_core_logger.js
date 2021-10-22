"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var chalk = require('chalk');
var LOG_TYPES = {
    NONE: 0,
    ERROR: 1,
    NORMAL: 2,
    DEBUG: 3,
    FFDEBUG: 4
};
var logType = LOG_TYPES.NORMAL;
var setLogType = function (type) {
    if (typeof type !== 'number')
        return;
    logType = type;
};
var logTime = function () {
    var nowDate = new Date();
    return nowDate.toLocaleDateString() + ' ' + nowDate.toLocaleTimeString([], { hour12: false });
};
var log = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (logType < LOG_TYPES.NORMAL)
        return;
    console.log.apply(console, __spreadArray([logTime(), process.pid, chalk.bold.green('[INFO]')], args, false));
};
var error = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (logType < LOG_TYPES.ERROR)
        return;
    console.log.apply(console, __spreadArray([logTime(), process.pid, chalk.bold.red('[ERROR]')], args, false));
};
var debug = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (logType < LOG_TYPES.DEBUG)
        return;
    console.log.apply(console, __spreadArray([logTime(), process.pid, chalk.bold.blue('[DEBUG]')], args, false));
};
var ffdebug = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (logType < LOG_TYPES.FFDEBUG)
        return;
    console.log.apply(console, __spreadArray([logTime(), process.pid, chalk.bold.blue('[FFDEBUG]')], args, false));
};
module.exports = {
    LOG_TYPES: LOG_TYPES,
    setLogType: setLogType,
    log: log,
    error: error,
    debug: debug,
    ffdebug: ffdebug
};
