import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    if(params.post_id === 'example'){
      return {title:'Example Post Title',note:'Warning Note', encodedContent:'Guvf vf fbzr rknzcyr pbagrag. Abeznyyl, guvf pbhyq or n oybt cbfg, n abgr, be nal xvaq bs pbagrag be cvrpr bs grkg gung arrqf gur nccyvrq jneavat. Vs lbh pna ernq guvf, lbh unir pbafragrq gb qrpbqvat vg.'};
    }
    return this.store.findRecord('post', params.post_id);
  }
});
