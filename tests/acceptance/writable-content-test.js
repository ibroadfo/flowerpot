import { test } from 'qunit';
import moduleForAcceptance from 'flowerpot/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | writable content');

test('talking about my fears', function(assert) {
  visit('/posts/new');
  fillIn('input.title', 'preteen rodent trauma');
  fillIn('textarea.content', 'a long post about mice');
  click('button.submit');

  andThen(function() {
    assert.equal(currentURL(), '/posts/1');
    assert.equal($('.full-post').length, 1);
    assert.equal($('.full-post:contains("mice")').length, 0);
    assert.equal($('.full-post:contains("zvpr")').length, 1);
  });
});
