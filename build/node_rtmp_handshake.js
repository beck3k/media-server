"use strict";
var Logger = require('./node_core_logger');
var Crypto = require('crypto');
var MESSAGE_FORMAT_0 = 0;
var MESSAGE_FORMAT_1 = 1;
var MESSAGE_FORMAT_2 = 2;
var RTMP_SIG_SIZE = 1536;
var SHA256DL = 32;
var RandomCrud = Buffer.from([
    0xf0, 0xee, 0xc2, 0x4a, 0x80, 0x68, 0xbe, 0xe8,
    0x2e, 0x00, 0xd0, 0xd1, 0x02, 0x9e, 0x7e, 0x57,
    0x6e, 0xec, 0x5d, 0x2d, 0x29, 0x80, 0x6f, 0xab,
    0x93, 0xb8, 0xe6, 0x36, 0xcf, 0xeb, 0x31, 0xae
]);
var GenuineFMSConst = 'Genuine Adobe Flash Media Server 001';
var GenuineFMSConstCrud = Buffer.concat([Buffer.from(GenuineFMSConst, 'utf8'), RandomCrud]);
var GenuineFPConst = 'Genuine Adobe Flash Player 001';
var GenuineFPConstCrud = Buffer.concat([Buffer.from(GenuineFPConst, 'utf8'), RandomCrud]);
function calcHmac(data, key) {
    var hmac = Crypto.createHmac('sha256', key);
    hmac.update(data);
    return hmac.digest();
}
function GetClientGenuineConstDigestOffset(buf) {
    var offset = buf[0] + buf[1] + buf[2] + buf[3];
    offset = (offset % 728) + 12;
    return offset;
}
function GetServerGenuineConstDigestOffset(buf) {
    var offset = buf[0] + buf[1] + buf[2] + buf[3];
    offset = (offset % 728) + 776;
    return offset;
}
function detectClientMessageFormat(clientsig) {
    // let computedSignature, msg, providedSignature, sdl;
    var sdl = GetServerGenuineConstDigestOffset(clientsig.slice(772, 776));
    var msg = Buffer.concat([clientsig.slice(0, sdl), clientsig.slice(sdl + SHA256DL)], 1504);
    var computedSignature = calcHmac(msg, GenuineFPConst);
    var providedSignature = clientsig.slice(sdl, sdl + SHA256DL);
    if (computedSignature.equals(providedSignature)) {
        return MESSAGE_FORMAT_2;
    }
    sdl = GetClientGenuineConstDigestOffset(clientsig.slice(8, 12));
    msg = Buffer.concat([clientsig.slice(0, sdl), clientsig.slice(sdl + SHA256DL)], 1504);
    computedSignature = calcHmac(msg, GenuineFPConst);
    providedSignature = clientsig.slice(sdl, sdl + SHA256DL);
    if (computedSignature.equals(providedSignature)) {
        return MESSAGE_FORMAT_1;
    }
    return MESSAGE_FORMAT_0;
}
function generateS1(messageFormat) {
    var randomBytes = Crypto.randomBytes(RTMP_SIG_SIZE - 8);
    var handshakeBytes = Buffer.concat([Buffer.from([0, 0, 0, 0, 1, 2, 3, 4]), randomBytes], RTMP_SIG_SIZE);
    var serverDigestOffset;
    if (messageFormat === 1) {
        serverDigestOffset = GetClientGenuineConstDigestOffset(handshakeBytes.slice(8, 12));
    }
    else {
        serverDigestOffset = GetServerGenuineConstDigestOffset(handshakeBytes.slice(772, 776));
    }
    var msg = Buffer.concat([handshakeBytes.slice(0, serverDigestOffset), handshakeBytes.slice(serverDigestOffset + SHA256DL)], RTMP_SIG_SIZE - SHA256DL);
    var hash = calcHmac(msg, GenuineFMSConst);
    hash.copy(handshakeBytes, serverDigestOffset, 0, 32);
    return handshakeBytes;
}
function generateS2(messageFormat, clientsig, callback) {
    var randomBytes = Crypto.randomBytes(RTMP_SIG_SIZE - 32);
    var challengeKeyOffset;
    if (messageFormat === 1) {
        challengeKeyOffset = GetClientGenuineConstDigestOffset(clientsig.slice(8, 12));
    }
    else {
        challengeKeyOffset = GetServerGenuineConstDigestOffset(clientsig.slice(772, 776));
    }
    var challengeKey = clientsig.slice(challengeKeyOffset, challengeKeyOffset + 32);
    var hash = calcHmac(challengeKey, GenuineFMSConstCrud);
    var signature = calcHmac(randomBytes, hash);
    var s2Bytes = Buffer.concat([randomBytes, signature], RTMP_SIG_SIZE);
    return s2Bytes;
}
function generateS0S1S2(clientsig) {
    var clientType = Buffer.alloc(1, 3);
    var messageFormat = detectClientMessageFormat(clientsig);
    var allBytes;
    if (messageFormat === MESSAGE_FORMAT_0) {
        //    Logger.debug('[rtmp handshake] using simple handshake.');
        allBytes = Buffer.concat([clientType, clientsig, clientsig]);
    }
    else {
        //    Logger.debug('[rtmp handshake] using complex handshake.');
        allBytes = Buffer.concat([clientType, generateS1(messageFormat), generateS2(messageFormat, clientsig)]);
    }
    return allBytes;
}
module.exports = { generateS0S1S2: generateS0S1S2 };
