import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  rottenCoder: Ember.inject.service(),
  content: Ember.computed({
    get() {
      return '';
    },
    set(key, value) {
      this.set('encodedContent', this.get('rottenCoder').encode(value));
      return value;
    }
  }),
  encodedContent: DS.attr(),
  title: DS.attr(),
  note: DS.attr(),
  timestamp: DS.attr('number'),
  whitelisted: DS.attr('boolean', { default:false }),
  tweetString: Ember.computed('title', 'note', function() {
    return this.get('title') + " [" + this.get('note') + "]";
  }),

});
