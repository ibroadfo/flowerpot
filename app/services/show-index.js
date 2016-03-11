import Ember from 'ember';
import config from '../config/environment';

export default Ember.Service.extend({
  showIndex: Ember.computed(function() {
    if(config.environment === 'production') {
      return false;
    }
    else {
      return true;
    }
  }),
});
