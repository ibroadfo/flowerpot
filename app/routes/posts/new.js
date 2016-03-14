import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('post');
  },
  actions: {
    submitTheThing(thing) {
      thing.set('timestamp', new Date().getTime());
      thing.save().then( () => {
        this.transitionTo('post', thing);
      });
    }
  }
});
