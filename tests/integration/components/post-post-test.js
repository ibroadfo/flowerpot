import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../helpers/setup-mirage-for-integration';
import wait from 'ember-test-helpers/wait';

moduleForComponent('post-post', 'Integration | Component | post post', {
  integration: true,
  setup: function() {
    startMirage(this.container);
  }, afterEach: function() {
    server.shutdown();
  }
});

test('it renders, but not the plaintext', function(assert) {
  this.set('model', {encodedContent:'onqtre shpxre'});

  this.render(hbs`{{post-post model=model}}`);

  assert.notEqual(this.$().text().trim(), 'badger fucker');
  assert.equal(this.$('#post').text().trim(), 'onqtre shpxre');
});

test('clicking decode decodes the text', function(assert) {
  this.set('model2', server.create('post', {encodedContent:'onqtre shpxre'}));

  this.render(hbs`{{post-post model=model2}}`);

  assert.notEqual(this.$().text().trim(), 'badger fucker');

  this.$('#decode').click();

  assert.equal(this.$('#post').text().trim(), 'badger fucker');

});

test('it creates a report', function(assert) {
  this.set('model', {encodedContent:'onqtre shpxre'});
  this.render(hbs`{{post-post model=model}}`);
  this.$('#toggle-report').click();
  this.$('#submit-report').click();
  return wait().then(() => {
    assert.equal(this.$().text().trim(), 'Thank you for submitting your report.');
  });
});
