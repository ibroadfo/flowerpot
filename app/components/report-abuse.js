import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['report-abuse'],
  actions: {
    submitReport() {
      this.sendAction('createReport', {
        extraContext: $('#extra-context').val()
      });
    }
  }
});
