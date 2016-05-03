import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    if(params.post_id === 'example'){
      return {title:'example post',note:'example note', encodedContent:'rknzcyr pbagrag'};
    }
    return this.store.findRecord('post', params.post_id);
  }
});
