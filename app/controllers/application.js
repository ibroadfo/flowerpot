import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
  showIndex: Ember.computed('property', function() {
    return config.APP.showIndex;
  }),
  classForCurrentPath: Ember.computed('currentPath', {
    get() {
      let currentPath = this.get('currentPath');
      if (currentPath) {
        return `${currentPath.replace(/\./g, '-')}-route`;
      }
    }
  }),
});
