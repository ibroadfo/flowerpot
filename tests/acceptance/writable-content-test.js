import { test } from 'qunit';
import moduleForAcceptance from 'flowerpot/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | writable content');

test('talking about my fears', function(assert) {
  visit('/posts/new');
  fillIn('input.title', 'a specific phobia');
  fillIn('textarea.content', 'a long post about my common phobia');
  click('button.submit');

  andThen(function() {
    assert.equal(currentURL(), '/posts/1');
    assert.equal($('.post-content').length, 1);
    assert.equal($('.post-content:contains("phobia")').length, 0);
    assert.equal($('.post-content:contains("cubovn")').length, 1);
  });
});
