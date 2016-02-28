import { test } from 'qunit';
import moduleForAcceptance from 'flowerpot/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | unreadable content');

test('cats chasing mice', function(assert) {
  visit('/a-post-about-my-cats');

  andThen(function() {
    assert.equal(currentURL(), '/a-post-about-my-cats');
    assert.equal($('#post').length, 1);
    assert.equal($('#post:contains("mice")').length, 0);
  });
});
