import { test } from 'qunit';
import moduleForAcceptance from 'flowerpot/tests/helpers/module-for-acceptance';
import config from '../../config/environment';

moduleForAcceptance('Acceptance | hide index');

test('the list of posts should be visible', function(assert) {
  visit('/posts');

  andThen(function() {
    assert.equal(currentURL(), '/posts');
  });
});

test('the list of posts should be invisible', function(assert) {
  config.APP.showIndex = false;
  visit('/posts');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
