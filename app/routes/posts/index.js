import Ember from 'ember';
import config from '../../config/environment';

export default Ember.Route.extend({
  beforeModel() {
    if( ! config.APP.showIndex ) {
      this.transitionTo('/');
    }
  },
  model() {return this.store.findAll('post');}
});
