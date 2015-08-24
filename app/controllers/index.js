import Ember from 'ember';

export default Ember.Controller.extend({
  appController: Ember.inject.controller('application'),
  network: Ember.computed.reads('appController.network')
});
