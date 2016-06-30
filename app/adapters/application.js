import config from '../config/environment';
import FirebaseAdapter from 'emberfire/adapters/firebase';
import DS from 'ember-data';

let adapt;

if(config.featureFlags['use-firebase']) {
  adapt = FirebaseAdapter.extend();
}
else {
  adapt = DS.JSONAPIAdapter.extend();
}

export default adapt;
