import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  timestamp: 5,
  extra_context: 'it bad',
  post_id: 1
});
