import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  timestamp: 5,
  extraContext: 'it bad',
  postId: 1
});
