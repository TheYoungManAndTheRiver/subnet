import DS from 'ember-data';

export default DS.Model.extend({
  ip: DS.attr( 'number' ),
  networkBits: DS.attr( 'number' )
});
