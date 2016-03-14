import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  rottenCoder: Ember.inject.service(),
  visibleContent: Ember.computed.oneWay('model.encodedContent'),
  actions: {
    decodeMe() {
      this.set('visibleContent', this.get('rottenCoder').decode(this.get('model.encodedContent')));
      this.$('button').prop('disabled', true);
    },
    createReport(props) {
      this.get('store').createRecord('abuse-report', {
        extraContext: props.extraContext,
        post: this.get('model'),
        timestamp: new Date().getTime()
      }).save();
      this.set('reportSubmitted', true);
    }
  }
});
