import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  author() { return faker.internet.userName(); },
  encoded_content: 'onqtre shpxre'
});
