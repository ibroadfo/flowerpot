import Ember from 'ember';

export default Ember.Route.extend({
  showIndex: Ember.inject.service(),
  beforeModel() {
    if( ! this.get('showIndex.showIndex') ) {
      this.transitionTo('/');
    }
  },
  model() {return this.store.findAll('post');}
});
