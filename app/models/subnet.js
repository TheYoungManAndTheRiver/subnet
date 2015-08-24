import DS from 'ember-data';
import Network from 'subnet/models/network';

export default Network.extend({
  parent: DS.belongsTo('network')
});
