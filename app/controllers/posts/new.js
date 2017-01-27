import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitTheThing(thing) {
      thing.set('timestamp', new Date().getTime());
      thing.save().then( () => {
        this.get('flashMessages').add({
          message:'This is your new post; you can share this page with whoever you like.',
          sticky:true,
          destroyOnClick: false,
        });
        this.transitionToRoute('post', thing);
      });
    }
  }
});
