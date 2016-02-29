import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../helpers/setup-mirage-for-integration';

moduleForComponent('message-post', 'Integration | Component | message post', {
  integration: true,
  setup: function() {
    startMirage(this.container);
  }
});

test('it renders, but not the plaintext', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"
  this.set('model', server.create('post', {content:'badger fucker'}))

  this.render(hbs`{{message-post model=model}}`);

  assert.notEqual(this.$().text().trim(), 'badger fucker');
});
