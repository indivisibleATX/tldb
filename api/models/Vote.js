/**
 * Vote.js
 *
 * @description :: Details about each vote
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: { type: 'string' },

    voters: {
      collection: 'legislator',
      via: 'votes'
    }
  }
};

