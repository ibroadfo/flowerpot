import DS from 'ember-data';

export default DS.Model.extend({
  content: Ember.computed({
    set(key, value) {
      this.set('encodedContent', 'XXXXXXXXXXXXX')
      return value;
    }
  })

});
