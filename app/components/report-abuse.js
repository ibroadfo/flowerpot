import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['report-abuse'],
  currentURL: Ember.computed(function() {
    return encodeURIComponent(window.location);
  }),
});
