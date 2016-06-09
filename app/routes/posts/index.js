import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (!this.features.isEnabled('show-index')){
      this.transitionTo('/');
    }
  },
  model() {return this.store.findAll('post');}
});
