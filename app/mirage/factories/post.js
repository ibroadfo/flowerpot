import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  author(i) { return faker.internet.userName(); },
  encoded_content: 'onqtre shpxre'
});
