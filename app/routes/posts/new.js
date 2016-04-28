import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model() {
    return this.store.createRecord('post');
  },
  actions: {
    submitTheThing(thing) {
      thing.set('timestamp', new Date().getTime());
      thing.save().then( () => {
        this.get('flashMessages').add({message:'this is your new post; you can share this page with whoever you like.', sticky:true});
        this.transitionTo('post', thing);
      });
    }
  }
});
