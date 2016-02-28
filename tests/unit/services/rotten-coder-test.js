import { moduleFor, test } from 'ember-qunit';

moduleFor('service:rotten-coder', 'Unit | Service | rotten coder', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it encodes strings', function(assert) {
  let service = this.subject();
  assert.notEqual(service.encode('string'), 'string');
});

test('it decodes encoded strings', function(assert) {
  let service = this.subject();
  assert.equal(service.decode(service.encode('string')), 'string');
});
