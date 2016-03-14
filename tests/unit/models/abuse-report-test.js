import { moduleForModel, test } from 'ember-qunit';

moduleForModel('abuse-report', 'Unit | Model | abuse report', {
  // Specify the other units that are required for this test.
  needs: ['model:post']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
