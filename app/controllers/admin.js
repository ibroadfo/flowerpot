import Ember from 'ember';

export default Ember.Controller.extend({
  unreviewedReports: Ember.computed('model', 'model.@each.whitelisted', function() {
    return this.get('model').rejectBy('post.whitelisted');
  }),
});
