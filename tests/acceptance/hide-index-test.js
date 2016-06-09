import { test } from 'qunit';
import moduleForAcceptance from 'flowerpot/tests/helpers/module-for-acceptance';
import 'flowerpot/tests/helpers/with-feature';

moduleForAcceptance('Acceptance | hide index');

test('the list of posts should be visible', function(assert) {
  withFeature('showIndex');
  visit('/posts');

  andThen(function() {
    assert.equal(currentURL(), '/posts');
  });
});

test('the list of posts should be invisible', function(assert) {
  visit('/posts');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
