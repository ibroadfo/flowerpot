import { test } from 'qunit';
import moduleForAcceptance from 'flowerpot/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | unreadable content');

test('cats chasing mice', function(assert) {
  server.create('post', {title:'A post about my cats', content:'Yesterday my cats chased some mice'});
  visit('/a-post-about-my-cats');

  andThen(function() {
    assert.equal(currentURL(), '/a-post-about-my-cats');
    assert.equal($('#post').length, 1);
    assert.equal($('#post:contains("mice")').length, 0);
  });
});
