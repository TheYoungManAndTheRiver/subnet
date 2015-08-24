import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.controllerFor('index').get('network').get('subnets');
  }
});
