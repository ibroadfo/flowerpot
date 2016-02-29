import { test } from 'qunit';
import moduleForAcceptance from 'flowerpot/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | unreadable content');

test('cats chasing mice', function(assert) {
  server.create('post', {title:'A post about my cats', encodedContent:'Lrfgreqnl zl pngf punfrq fbzr zvpr'});

  visit('/posts/1');

  andThen(function() {
    assert.equal(currentURL(), '/posts/1');
    assert.equal($('#post').length, 1);
    assert.equal($('#post:contains("mice")').length, 0);
    assert.equal($('#post:contains("zvpr")').length, 1);
  });
});
