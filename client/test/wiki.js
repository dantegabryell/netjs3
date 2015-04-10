// Generated by CoffeeScript 1.9.1
var expect, wiki;

wiki = require('../lib/wiki');

expect = require('expect.js');

describe('wiki', function() {
  describe('link resolution', function() {
    it('should pass free text as is', function() {
      var s;
      s = wiki.resolveLinks("hello world");
      return expect(s).to.be('hello world');
    });
    describe('internal links', function() {
      var s;
      s = wiki.resolveLinks("hello [[world]]");
      it('should be class internal', function() {
        return expect(s).to.contain('class="internal"');
      });
      it('should relative reference html', function() {
        return expect(s).to.contain('href="/world.html"');
      });
      return it('should have data-page-name', function() {
        return expect(s).to.contain('data-page-name="world"');
      });
    });
    return describe('external links', function() {
      var s;
      s = wiki.resolveLinks("hello [http://world.com?foo=1&bar=2 world]");
      it('should be class external', function() {
        return expect(s).to.contain('class="external"');
      });
      it('should absolute reference html', function() {
        return expect(s).to.contain('href="http://world.com?foo=1&bar=2"');
      });
      return it('should not have data-page-name', function() {
        return expect(s).to.not.contain('data-page-name');
      });
    });
  });
  return describe('slug formation', function() {
    it('should convert capitals to lowercase', function() {
      var s;
      s = wiki.asSlug('WelcomeVisitors');
      return expect(s).to.be('welcomevisitors');
    });
    it('should convert spaces to dashes', function() {
      var s;
      s = wiki.asSlug(' now is  the time ');
      return expect(s).to.be('-now-is--the-time-');
    });
    it('should pass letters, numbers and dash', function() {
      var s;
      s = wiki.asSlug('THX-1138');
      return expect(s).to.be('thx-1138');
    });
    return it('should discard other puctuation', function() {
      var s;
      s = wiki.asSlug('(The) World, Finally.');
      return expect(s).to.be('the-world-finally');
    });
  });
});
