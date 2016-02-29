import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../helpers/setup-mirage-for-integration';

moduleForComponent('message-post', 'Integration | Component | message post', {
  integration: true,
  setup: function() {
    startMirage(this.container);
  }, afterEach: function() {
    server.shutdown();
  }
});

test('it renders, but not the plaintext', function(assert) {
  this.set('model', server.create('post'))

  this.render(hbs`{{message-post model=model}}`);

  assert.notEqual(this.$().text().trim(), 'badger fucker');
});

// test('clicking decode decodes the text', function(assert) {
//   this.set('model2', server.create('post', {encodedContent:'onqtre shpxre'}))
//
//   this.render(hbs`{{message-post model=model}}`);
//
//   assert.notEqual(this.$().text().trim(), 'badger fucker');
//
//   this.$('button').click();
//
//   assert.equal(this.$().text().trim(), 'badger fucker');
//
// });
