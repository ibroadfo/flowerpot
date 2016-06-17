import Ember from 'ember';
import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  rottenCoder: Ember.inject.service(),

  encodedContent() { return $.rot13(faker.lorem.paragraph()); },
  title() { return faker.company.catchPhrase(); },
  note() { return faker.lorem.words(); }


});
