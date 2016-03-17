import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('report-abuse', 'Integration | Component | report abuse', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{report-abuse}}`);

  assert.equal(this.$().text().trim(), 'report abuse');
});

test('clicking the button shows the form', function(assert) {
  this.render(hbs`{{report-abuse}}`);

  assert.equal(this.$().text().trim(), 'report abuse');
  this.$('button').click();
  assert.notEqual(this.$().text().trim(), 'report abuse');

});

test('submitting a report works', function(assert) {
  assert.expect(1);
  this.on('assertSubmitted', () => assert.ok(true));
  this.render(hbs`{{report-abuse createReport="assertSubmitted"}}`);
  this.$('button').click();
  this.$('#submit-report').click();
});
