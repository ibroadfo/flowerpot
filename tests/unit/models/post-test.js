import { moduleForModel, test } from 'ember-qunit';

moduleForModel('post', 'Unit | Model | post', {
  // Specify the other units that are required for this test.
  needs: ['service:rottenCoder']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('should only store encoded version of content', function(assert) {
  let post = this.subject({content:'allergies'});
  assert.notEqual(post.get('encodedContent', 'allergies'));
});

test('encoded content should be decodable', function(assert) {
    let post = this.subject({content:'allergies'});
    assert.notEqual(post.get('encodedContent', 'allergies'));

    assert.equal('allergies', post.get('rottenCoder').decode(post.get('encodedContent')));
});
