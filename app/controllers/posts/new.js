import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitTheThing(thing) {
      thing.set('timestamp', new Date().getTime());
      thing.save().then( () => {
        this.get('flashMessages').add({message:'this is your new post; you can share this page with whoever you like.', sticky:true});
        this.transitionToRoute('post', thing);
      });
    }
  }
});
