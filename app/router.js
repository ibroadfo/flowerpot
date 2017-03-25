import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts', function() {
    this.route('post', {path: '/:post_id', resetNamespace: true });
    this.route('new');
  });
  this.route('mdContent', {path: '/mdContent/:file_name'});
  this.route('admin');
});

export default Router;
