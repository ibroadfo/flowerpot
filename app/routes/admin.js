import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    if (this.get('session.isAuthenticated')) {
      return this.store.findAll('abuseReport');
    }
    else {
      return [];
    }
  },
  actions: {
    error(error, transition) {
      if (error) {
        this.get("session").close();
        this.refresh();
      }
    }
  }
});
