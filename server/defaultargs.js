// Generated by CoffeeScript 1.9.1

/*
 * Federated Wiki : Node Server
 *
 * Copyright Ward Cunningham and other contributors
 * Licensed under the MIT license.
 * https://github.com/fedwiki/wiki-node-server/blob/master/LICENSE.txt
 */
var getUserHome, path;

path = require('path');

getUserHome = function () {
    return process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
};

module.exports = function (argv) {
    var base;
    argv || (argv = {});
    argv.root || (argv.root = __dirname);
    argv.packageDir || (argv.packageDir = path.join(argv.root, ".."));
    argv.port || (argv.port = 3000);
    argv.home || (argv.home = 'index');
    argv.data || (argv.data = path.join(getUserHome(), '.wiki'));
    argv.client || (argv.client = __dirname + '/../client')//path.join(argv.packageDir, 'client', 'client'));
    argv.db || (argv.db = path.join(argv.data, 'pages'));
    argv.status || (argv.status = path.join(argv.data, 'status'));
    argv.env || (argv.env = "development");
    if (argv.port !== 80) {
        argv.url || (argv.url = 'http://localhost' + (':' + argv.port));
    }
    argv.id || (argv.id = path.join(argv.status, 'persona.identity'));
    argv.uploadLimit || (argv.uploadLimit = '1mb');
    argv.neighbors || (argv.neighbors = '');
    if (typeof argv.database === 'string') {
        argv.database = JSON.parse(argv.database);
    }
    argv.database || (argv.database = {});
    (base = argv.database).type || (base.type = './page');
    if (argv.database.type.charAt(0) === '.') {
        if (argv.database.type !== './page') {
            console.log("\n\nWARNING: This storage option is deprecated.");
            console.log("    See ReadMe for details of the changes required.\n\n");
        }
    } else {
        argv.database.type = 'wiki-storage-' + argv.database.type;
    }
    argv.compress = true; //compress HTTP responses
    argv.root = path.resolve(argv.root);
    argv.packageDir = path.resolve(argv.packageDir);
    argv.data = path.resolve(argv.data);
    argv.client = path.resolve(argv.client);
    argv.db = path.resolve(argv.db);
    argv.status = path.resolve(argv.status);
    argv.id = path.resolve(argv.id);
    if (/node_modules/.test(argv.data)) {
        console.log("\n\nWARNING : The dafault data path is not a safe place.");
        console.log("       : by using ", argv.data, " your pages will be lost when packages are updated.");
        console.log("       : You are strongly advised to use an alternative directory.");
        console.log("       : See the wiki package ReadMe for how to do this.\n\n");
    }
    return argv;
};
