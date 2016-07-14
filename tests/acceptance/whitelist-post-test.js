import { test } from 'qunit';
import moduleForAcceptance from 'flowerpot/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | whitelist post');

test('false abuse reports', function(assert) {
  server.create('post', {title:'A post about my birthday', encodedContent:'abguvat nohfvir'}); // nothing abusive
  server.createList('abuseReport', 50);

  visit('/admin');

  andThen(function() {
    assert.equal($('tr').length, 50); //just checking
  });

  click('.button-whitelist');

  andThen(function() {
    assert.equal($('tr').length, 0);
  });
});
