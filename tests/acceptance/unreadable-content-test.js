import { test } from 'qunit';
import moduleForAcceptance from 'flowerpot/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | unreadable content');

test('phobia one', function(assert) {
  server.create('post', {title:'A post about my rare phobia', encodedContent:'N ybat cbfg qrfpevovat zl ener cubovn'}); // A long post describing my rare phobia

  visit('/posts/1');

  andThen(function() {
    assert.equal(currentURL(), '/posts/1');
    assert.equal($('.post-content').length, 1);
    assert.equal($('.post-content:contains("phobia")').length, 0);
    assert.equal($('.post-content:contains("cubovn")').length, 1);
  });
});

test('phobia two', function(assert) {
  server.create('post', {title:'A post about common phobia', encodedContent:'N fubeg cbfg qrfpevovat zl pbzzba cubovn'}); // A short post describing my common phobia

  visit('/posts/1');

  andThen(function() {
    assert.equal(currentURL(), '/posts/1');
    assert.equal($('.post-content').length, 1);
    assert.equal($('.post-content:contains("common phobia")').length, 0);
    assert.equal($('.post-content:contains("pbzzba cubovn")').length, 1);
  });

  click('.button-decode');

  andThen(function() {
    assert.equal($('.post-content:contains("common phobia")').length, 1);
    assert.equal($('.post-content:contains("pbzzba cubovn")').length, 0);
  });
});
