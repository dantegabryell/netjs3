// Generated by CoffeeScript 1.9.1
var dialog, editor, itemz, link, pageHandler, plugin, resolve, wiki,
  slice = [].slice;

wiki = {};

wiki.asSlug = require('./page').asSlug;

itemz = require('./itemz');

wiki.removeItem = itemz.removeItem;

wiki.createItem = itemz.createItem;

wiki.getItem = itemz.getItem;

dialog = require('./dialog');

wiki.dialog = dialog.open;

link = require('./link');

wiki.createPage = link.createPage;

wiki.doInternalLink = link.doInternalLink;

plugin = require('./plugin');

wiki.getScript = plugin.getScript;

wiki.getPlugin = plugin.getPlugin;

wiki.doPlugin = plugin.doPlugin;

wiki.registerPlugin = plugin.registerPlugin;

wiki.getData = function(vis) {
  var idx, who;
  if (vis) {
    idx = $('.item').index(vis);
    who = $(".item:lt(" + idx + ")").filter('.chart,.data,.calculator').last();
    if (who != null) {
      return who.data('item').data;
    } else {
      return {};
    }
  } else {
    who = $('.chart,.data,.calculator').last();
    if (who != null) {
      return who.data('item').data;
    } else {
      return {};
    }
  }
};

wiki.getDataNodes = function(vis) {
  var idx, who;
  if (vis) {
    idx = $('.item').index(vis);
    who = $(".item:lt(" + idx + ")").filter('.chart,.data,.calculator').toArray().reverse();
    return $(who);
  } else {
    who = $('.chart,.data,.calculator').toArray().reverse();
    return $(who);
  }
};

wiki.log = function() {
  var things;
  things = 1 <= arguments.length ? slice.call(arguments, 0) : [];
  if ((typeof console !== "undefined" && console !== null ? console.log : void 0) != null) {
    return console.log.apply(console, things);
  }
};

wiki.neighborhood = require('./neighborhood').sites;

wiki.neighborhoodObject = require('./neighborhood');

pageHandler = require('./pageHandler');

wiki.pageHandler = pageHandler;

wiki.useLocalStorage = pageHandler.useLocalStorage;

resolve = require('./resolve');

wiki.resolveFrom = resolve.resolveFrom;

wiki.resolveLinks = resolve.resolveLinks;

wiki.resolutionContext = resolve.resolutionContext;

editor = require('./editor');

wiki.textEditor = editor.textEditor;

wiki.util = require('./util');

wiki.persona = require('./persona');

wiki.createSynopsis = require('./synopsis');

module.exports = wiki;
