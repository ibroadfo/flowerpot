import Ember from 'ember';
import config from '../config/environment';
import FirebaseAdapter from 'emberfire/adapters/firebase';
import ActiveModelAdapter from 'active-model-adapter';

let adapt;

if(config.environment === 'production') {
  const { inject } = Ember;

  adapt = FirebaseAdapter.extend({
    firebase: inject.service(),
  });
}
else {
  adapt = ActiveModelAdapter.extend();
}

export default adapt;
