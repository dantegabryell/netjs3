// Generated by CoffeeScript 1.9.1
var active, createSearch, link, newPage;

link = require('./link');

active = require('./active');

newPage = require('./page').newPage;

createSearch = function(arg) {
  var neighborhood, performSearch;
  neighborhood = arg.neighborhood;
  performSearch = function(searchQuery) {
    var i, len, ref, result, resultPage, searchResults, tally;
    searchResults = neighborhood.search(searchQuery);
    tally = searchResults.tally;
    resultPage = newPage();
    resultPage.setTitle("Search for '" + searchQuery + "'");
    resultPage.addParagraph("String '" + searchQuery + "' found on " + (tally.finds || 'none') + " of " + (tally.pages || 'no') + " pages from " + (tally.sites || 'no') + " sites.\nText matched on " + (tally.title || 'no') + " titles, " + (tally.text || 'no') + " paragraphs, and " + (tally.slug || 'no') + " slugs.\nElapsed time " + tally.msec + " milliseconds.");
    ref = searchResults.finds;
    for (i = 0, len = ref.length; i < len; i++) {
      result = ref[i];
      resultPage.addItem({
        "type": "reference",
        "site": result.site,
        "slug": result.page.slug,
        "title": result.page.title,
        "text": result.page.synopsis || ''
      });
    }
    return link.showResult(resultPage);
  };
  return {
    performSearch: performSearch
  };
};

module.exports = createSearch;