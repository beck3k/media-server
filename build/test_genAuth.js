"use strict";
var md5 = require('crypto').createHash('md5');
var key = 'privatekey';
var exp = (Date.now() / 1000 | 0) + 60;
var streamId = '/live/stream';
console.log(exp + '-' + md5.update(streamId + '-' + exp + '-' + key).digest('hex'));
