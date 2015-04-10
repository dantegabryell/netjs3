// Generated by CoffeeScript 1.9.1
var active, asSlug, createPage, doInternalLink, lineup, pageEmitter, ref, refresh, showPage, showResult;

lineup = require('./lineup');

active = require('./active');

refresh = require('./refresh');

ref = require('./page'), asSlug = ref.asSlug, pageEmitter = ref.pageEmitter;

createPage = function(name, loc) {
  var $page, site;
  if (loc && loc !== 'view') {
    site = loc;
  }
  $page = $("<div class=\"page\" id=\"" + name + "\">\n  <div class=\"twins\"> <p> </p> </div>\n  <div class=\"header\">\n    <h1> <img class=\"favicon\" src=\"" + (site ? "//" + site : "") + "/favicon.png\" height=\"32px\"> " + name + " </h1>\n  </div>\n</div>");
  if (site) {
    $page.data('site', site);
  }
  return $page;
};

showPage = function(name, loc) {
  return createPage(name, loc).appendTo('.main').each(refresh.cycle);
};

doInternalLink = function(name, $page, site) {
  if (site == null) {
    site = null;
  }
  name = asSlug(name);
  if ($page != null) {
    $($page).nextAll().remove();
  }
  if ($page != null) {
    lineup.removeAllAfterKey($($page).data('key'));
  }
  showPage(name, site);
  return active.set($('.page').last());
};

showResult = function(pageObject) {
  var $page;
  $page = createPage(pageObject.getSlug()).addClass('ghost');
  $page.appendTo($('.main'));
  refresh.buildPage(pageObject, $page);
  return active.set($('.page').last());
};

pageEmitter.on('show', function(page) {
  console.log('pageEmitter handling', page);
  return showResult(page);
});

module.exports = {
  createPage: createPage,
  doInternalLink: doInternalLink,
  showPage: showPage,
  showResult: showResult
};
