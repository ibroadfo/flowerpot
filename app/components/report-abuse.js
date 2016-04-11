import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['report-abuse'],
  extraContext: '',
  actions: {
    submitReport() {
      this.sendAction('createReport', {
        extraContext: this.get('extraContext')
      });
    }
  }
});
