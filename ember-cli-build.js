/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      includePaths: [
        'bower_components/skeleton-framework/dist',
        'bower_components/normalize-css'
      ]
    },
    transforms: {
      targets: [
        {
          pattern: 'embed.html',
          transform: (content) => content.replace(/transformEmbedApiKey/g, process.env.FIREBASE_EMBED_API_KEY)
        },
        {
          pattern: 'embed.html',
          transform: (content) => content.replace(/transformEmbedAppName/g, process.env.FIREBASE_APP_NAME)
        }
      ]
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('bower_components/jquery.rot13/dist/jquery.rot13.js');
  app.import('bower_components/autolink/autolink-min.js');
  app.import('vendor/embed.html', {destDir: ''});


  return app.toTree();
};
