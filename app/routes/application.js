import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.createRecord('subnet', {
      ip: 0,
      networkBits: 16
    });
  }
});
