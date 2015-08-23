import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  // IPs are stored as int
  networkAddress: DS.attr("number"),
  networkBits: DS.attr("number"),

  // turns an IP (represented by an integer) into it's readable representation
  toDecimalRepresentation: function(ip) {
    var octetts = new Array(4);
    for (var i = octetts.length - 1; i >= 0; i--) {
      octetts[i] = ip & 255;
      ip >>= 8;
    }
    return octetts.join(".");
  },

  networkAddressDecimalRepresentation: Ember.computed('networkAddress', {
    get() {
      return this.toDecimalRepresentation(this.get("networkAddress"));
    },
    set(key, value) {
      var previousValue = this.get(key);
      let newIP = 0;
      var octetts = value.split(".");
      if(octetts.length !== 4) {
        return previousValue;
      }
      for (let i = 0; i < octetts.length; i++) {
        if(octetts[i].length === 0 || isNaN(octetts[i]) || octetts[i] > 255 || octetts[i] < 0) {
          return previousValue;
        }
        newIP <<= 8;
        newIP += parseInt(octetts[i]);
      }
      this.set("networkAddress", newIP);
      return value;
    }
  }),

  availableBits: Ember.computed('networkBits', {
    get() {
      return 32 - this.get("networkBits");
    },
  }),

  availableHosts: Ember.computed('networkBits', {
    get() {
      return Math.pow(2, this.get("availableBits")) - 2;
    },
  }),

  subnetmask: Ember.computed('networkBits', {
    get() {
      var bits = Math.pow(2, this.get("networkBits")) - 1;
      return bits << this.get("availableBits");
    },
  }),

  subnetmaskDecimalRepresentation: Ember.computed('subnetmask', {
    get() {
      return this.toDecimalRepresentation(this.get('subnetmask'));
    },
  }),

  validSubnet: Ember.computed('networkAddress', 'subnetmask', {
    get() {
      return (this.get('networkAddress') & ~this.get('subnetmask')) === 0;
    },
  }),
});
