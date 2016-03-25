# Flowerpot [![Build Status](https://travis-ci.org/ibroadfo/flowerpot.svg?branch=master)](https://travis-ci.org/ibroadfo/flowerpot)

Flowerpot is a post-sharing app (think pastie) with explicit content notes; the author of a post can have complete confidence that the reader has definitely read and agreed to the note before reading the content of the post.

The main public instance of Flowerpot is at {link}; this page is for people who want to contribute to the development of the app. If you're new to software development, have a look at our [getting started guide](getting-started.md)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

We're hosting on firebase and deploying with [ember-cli-deploy-firebase](https://github.com/ibroadfo/ember-cli-deploy-firebase); you can use your own firebase app by setting `fireBaseAppName` in `config/deploy.js`.

Any normal ember-cli deploy [method](http://ember-cli.com/user-guide/#deployments) should work though!

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
