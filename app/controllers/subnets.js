import Ember from 'ember';
// import ApplicationIndexController from 'subnet/controllers/index';

export default Ember.Controller.extend({
  appController: Ember.inject.controller('application'),
  network: Ember.computed.reads('appController.network')
});
