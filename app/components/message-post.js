import Ember from 'ember';

export default Ember.Component.extend({
  rottenCoder: Ember.inject.service(),
  visibleContent: Ember.computed.oneWay('model.encodedContent'),
  actions: {
    decodeMe() {
      this.set('visibleContent', this.get('rottenCoder').decode(this.get('model.encodedContent')));
      this.$('button').prop('disabled', true);
    }
  }
});
