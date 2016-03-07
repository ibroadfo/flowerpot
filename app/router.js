import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', function() {
    this.route('new');
  });
  this.route('post', { path: '/posts/:post_id' });
  this.route('questions');
});

export default Router;
