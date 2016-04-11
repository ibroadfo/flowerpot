import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    if (this.get('session.isAuthenticated')) {
      return this.store.findAll('abuseReport');
    }
    else {
      return [];
    }
  }
});
