import Ember from 'ember';

export default Ember.Controller.extend({
  classForCurrentPath: Ember.computed('currentPath', {
    get() {
      let currentPath = this.get('currentPath');
      if (currentPath) {
        return `${currentPath.replace(/\./g, '-')}-route`;
      }
    }
  }),
});
