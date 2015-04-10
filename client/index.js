//console.log("Window Name: " + window.name);

window.name = window.location.host;

window.wiki = require('./lib/wiki');

require('./lib/legacy');

require('./lib/bind');

require('./lib/plugins');


module.exports = {
    wiki: window.wiki,
    synopsis: require('./lib/synopsis')
};