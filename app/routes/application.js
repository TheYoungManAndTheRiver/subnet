import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('network');
  },
  setupController: function (controller, model) {
    this._super(controller, model);
    var network = model.get('firstObject');
    if(!network) {
      network = this.store.createRecord('network', {
        networkAddressDecimalRepresentation: "10.18.4.0",
        networkBits: 24
      });
    }
    controller.set('network', network);
  }
});