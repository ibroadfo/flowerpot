import { test } from 'qunit';
import moduleForAcceptance from 'flowerpot/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | unreadable content');

test('cats chasing mice', function(assert) {
  server.create('post', {title:'A post about my cats', encoded_content:'Lrfgreqnl zl pngf punfrq fbzr zvpr'});

  visit('/posts/1');

  andThen(function() {
    assert.equal(currentURL(), '/posts/1');
    assert.equal($('.full-post').length, 1);
    assert.equal($('.full-post:contains("mice")').length, 0);
    assert.equal($('.full-post:contains("zvpr")').length, 1);
  });
});

test('spiders all over the wall', function(assert) {
  server.create('post', {title:'A post about spiders', encoded_content:'gurer jrer fcvqref rireljurer'});

  visit('/posts/1');

  andThen(function() {
    assert.equal(currentURL(), '/posts/1');
    assert.equal($('.full-post').length, 1);
    assert.equal($('.full-post:contains("spiders")').length, 0);
    assert.equal($('.full-post:contains("fcvqref")').length, 1);
  });

  click('.button-decode');

  andThen(function() {
    assert.equal($('.full-post:contains("spiders")').length, 1);
    assert.equal($('.full-post:contains("fcvqref")').length, 0);
  });
});
