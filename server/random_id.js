// Generated by CoffeeScript 1.9.1

/*
 * Federated Wiki : Node Server
 *
 * Copyright Ward Cunningham and other contributors
 * Licensed under the MIT license.
 * https://github.com/fedwiki/wiki-node-server/blob/master/LICENSE.txt
 */
//replacing this with library UUID this is nuts to use all these closures to generate 16 random chars
//random_id = function (chars) {
//    var i, results;
//    if (chars == null) {
//        chars = 16;
//    }
//    return (function () {
//        results = [];
//        for (var i = 0; 0 <= chars ? i < chars : i > chars; 0 <= chars ? i++ : i--) {
//            results.push(i);
//        }
//        return results;
//    }).apply(this).map(function () {
//            return Math.floor(Math.random() * 16).toString(16);
//        }).join('');
//};

var crypto = require('crypto');

var defaultUUIDBytes = 16;

var random_id = function(bytes) {
    return crypto.randomBytes(bytes || defaultUUIDBytes).toString('base64')
};

module.exports = random_id.random_id = random_id;
