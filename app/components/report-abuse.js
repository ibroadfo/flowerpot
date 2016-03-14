import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['report-abuse'],
  currentURL: Ember.computed(function() {
    return encodeURIComponent(window.location);
  }),
  formVisible: false,
  buttonText: Ember.computed('formVisible', function() {
    if (this.get('formVisible')) {
      return 'hide abuse form';
    }
    else {
      return 'report abuse';
    }
  }),
  actions: {
    toggleAbuseForm() {
      this.toggleProperty('formVisible');
    }
  }
});
