// Generated by CoffeeScript 1.9.1

/*
 * Federated Wiki : Node Server
 *
 * Copyright Ward Cunningham and other contributors
 * Licensed under the MIT license.
 * https://github.com/fedwiki/wiki-node-server/blob/master/LICENSE.txt
 */
var exports, fs, glob, path;

fs = require('fs');

path = require('path');

glob = require('glob');

module.exports = exports = function (argv) {
    var plugins, startServer, startServers;
    plugins = {};
    startServer = function (params, plugin) {
        var server;
        server = argv.packageDir + "/" + plugin + "/server/server.js";
        return fs.exists(server, function (exists) {
            var base, e;
            if (exists) {
                console.log('starting plugin', plugin);
                try {
                    plugins[plugin] = require(server);
                    return typeof (base = plugins[plugin]).startServer === "function" ? base.startServer(params) : void 0;
                } catch (_error) {
                    e = _error;
                    return console.log('failed to start plugin', plugin, (e != null ? e.stack : void 0) || e);
                }
            }
        });
    };
    startServers = function (params) {
        return glob("wiki-plugin-*", {
            cwd: argv.packageDir
        }, function (e, plugins) {
            var i, len, plugin, results;
            results = [];
            for (i = 0, len = plugins.length; i < len; i++) {
                plugin = plugins[i];
                results.push(startServer(params, plugin));
            }
            return results;
        });
    };
    return {
        startServers: startServers
    };
};
