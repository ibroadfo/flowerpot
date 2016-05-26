import DS from 'ember-data';

export default DS.Model.extend({
  extraContext: DS.attr(),
  post: DS.belongsTo('post', {async: true}),
  timestamp: DS.attr('number')

});
