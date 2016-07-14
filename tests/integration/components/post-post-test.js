import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../helpers/setup-mirage-for-integration';

moduleForComponent('post-post', 'Integration | Component | post post', {
  integration: true,
  setup: function() {
    startMirage(this.container);
  }, afterEach: function() {
    server.shutdown();
  }
});

test('it renders, but not the plaintext', function(assert) {
  this.set('model', {encodedContent:'pbzzba cubovn'}); // common phobia

  this.render(hbs`{{post-post model=model}}`);

  assert.notEqual(this.$().text().trim(), 'common phobia');
  assert.equal(this.$('.post-content').text().trim(), 'pbzzba cubovn');
});

test('clicking decode decodes the text', function(assert) {
  this.set('model2', server.create('post', {encodedContent:'pbzzba cubovn'})); // common phobia

  this.render(hbs`{{post-post model=model2}}`);

  assert.notEqual(this.$().text().trim(), 'common phobia');

  this.$('.button-decode').click();

  assert.equal(this.$('.post-content').text().trim(), 'common phobia');

});
