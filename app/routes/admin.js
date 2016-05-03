import Ember from 'ember';
import config from '../config/environment';


export default Ember.Route.extend({
  model() {
    if (this.get('session.isAuthenticated') || config.environment === 'development') {
      return this.store.findAll('abuseReport');
    }
    else {
      return [];
    }
  },
  actions: {
    error(error, transition) {
      transition = transition; // jshint, i love you but you're bringing me down
      if (error) {
        this.get("session").close();
        this.refresh();
      }
    }
  }
});
