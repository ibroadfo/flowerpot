import Ember from 'ember';
import ResetScrollMixin from 'ember-cli-reset-scroll';

export default Ember.Route.extend(ResetScrollMixin, {
  beforeModel: function() {
    if (this.features.isEnabled('use-firebase')) {
      return this.get("session").fetch().catch(function() {});
    }
  },

  actions: {
    signIn: function(provider) {
      if (this.features.isEnabled('use-firebase')) {
        this.get("session").open("firebase", { provider: provider}).then(() => {
          this.refresh();
        });
      }
    },
    signOut: function() {
      if (this.features.isEnabled('use-firebase')) {
        this.get("session").close();
        this.refresh();
      }
    }
  }
});
