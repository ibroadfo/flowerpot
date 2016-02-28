import { moduleFor, test } from 'ember-qunit';

moduleFor('route:a-post-about-my-cats', 'Unit | Route | a post about my cats', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
