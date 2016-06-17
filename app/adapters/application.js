import Ember from 'ember';
import config from '../config/environment';
import FirebaseAdapter from 'emberfire/adapters/firebase';
import DS from 'ember-data';

let adapt;

if(config.featureFlags['use-firebase']) {
  const { inject } = Ember;

  adapt = FirebaseAdapter.extend({
    firebase: inject.service()
  });
}
else {
  adapt = DS.JSONAPIAdapter.extend();
}

export default adapt;
