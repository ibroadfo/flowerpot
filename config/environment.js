/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'flowerpot',
    environment: environment,
    contentSecurityPolicy: { 'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com" },
    torii: {
      sessionServiceName: 'session'
    },
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {},

    featureFlags: {
      'show-index': true,
      'use-firebase': false,
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.featureFlags['show-index'] = false;
    ENV.featureFlags['use-firebase'] = false;
  }

  if (environment === 'production') {
    ENV.featureFlags['show-index'] = true;
    ENV.featureFlags['use-firebase'] = true;
  }

  if (ENV.featureFlags['use-firebase']) {
    ENV.firebase = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain:  process.env.FIREBASE_APP_NAME + ".firebaseapp.com",
      databaseURL: "https://" + process.env.FIREBASE_APP_NAME + ".firebaseio.com",
      storageBucket:  process.env.FIREBASE_APP_NAME + ".appspot.com",
    };
  }

  return ENV;
};
