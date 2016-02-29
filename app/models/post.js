import DS from 'ember-data';

export default DS.Model.extend({
  rottenCoder: Ember.inject.service(),
  content: Ember.computed({
    set(key, value) {
      this.set('encodedContent', this.get('rottenCoder').encode(value))
      return value;
    }
  })

});