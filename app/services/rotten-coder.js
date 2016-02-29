import Ember from 'ember';

export default Ember.Service.extend({
  encode(plaintext) {return $.rot13(plaintext);},
  decode(encodedText) {return $.rot13(encodedText);}
});
