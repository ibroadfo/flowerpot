import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    if (this.get('session.isAuthenticated') || !this.features.isEnabled('use-firebase')) {
      return this.store.findAll('abuseReport');
    }
    else {
      return [];
    }
  },
  actions: {
    whitelist(report) {
      report.set('whitelisted', true);
      report.get('post').set('whitelisted', true);
      report.get('post.content').save();
    },
    error(error) {
      if (error) {
        this.get("session").close();
        this.refresh();
      }
    }
  }
});
