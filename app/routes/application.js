import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('subnet', {
      networkAddressDecimalRepresentation: "10.18.4.0",
      networkBits: 24
    });
  }
});