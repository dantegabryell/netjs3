// Generated by CoffeeScript 1.9.1
var drop, expect, mockDrop, mockFile, mockUrl, signal;

drop = require('../lib/drop');

expect = require('expect.js');

signal = function(mock, handler) {
  return handler(mock);
};

mockDrop = function(dataTransfer) {
  return {
    preventDefault: function() {},
    stopPropagation: function() {},
    originalEvent: {
      dataTransfer: dataTransfer
    }
  };
};

mockUrl = function(type, url) {
  return mockDrop({
    types: [type],
    getData: function(spec) {
      return url;
    }
  });
};

mockFile = function(spec) {
  return mockDrop({
    types: ['File'],
    files: [spec]
  });
};

describe('drop', function() {
  it('should handle remote pages', function() {
    var event;
    event = mockUrl('text/uri-list', 'http://localhost:3000/fed.wiki.org/index');
    return signal(event, drop.dispatch({
      page: function(page) {
        return expect(page).to.eql({
          slug: 'index',
          site: 'fed.wiki.org'
        });
      }
    }));
  });
  it('should handle local pages', function() {
    var event;
    event = mockUrl('text/uri-list', 'http://fed.wiki.org/view/index');
    return signal(event, drop.dispatch({
      page: function(page) {
        return expect(page).to.eql({
          slug: 'index',
          site: 'fed.wiki.org'
        });
      }
    }));
  });
  it('should handle list of pages', function() {
    var event;
    event = mockUrl('text/uri-list', 'http://sfw.c2.com/view/index/view/pattern-language');
    return signal(event, drop.dispatch({
      page: function(page) {
        return expect(page).to.eql({
          slug: 'pattern-language',
          site: 'sfw.c2.com'
        });
      }
    }));
  });
  return it('should handle text file', function() {
    var event, file;
    file = {
      name: "foo.txt",
      type: "text/plain"
    };
    event = mockFile(file);
    return signal(event, drop.dispatch({
      file: function(data) {
        return expect(data).to.eql(file);
      }
    }));
  });
});
