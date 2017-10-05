/**
 * County.js
 *
 * @description :: A county within the state
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: { type: 'string' },
    seatCity: { type: 'string' },

    representatives: {
      collection: 'legislator',
      via: 'counties'
    }
  }
};

