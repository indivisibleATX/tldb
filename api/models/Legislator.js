/**
 * Legislator.js
 *
 * @description :: Central model for legislator people
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: { type: 'string' },
    party: { type: 'string', enum: ['Democrat', 'Republican', 'Green', 'Independent', 'Other'] },
    chamber: { type: 'string', enum: ['House', 'Senate', 'Administration'] },
    district: { type: 'string' },
    caucuses: { type: 'array' },
    photo: { type: 'string' },
    websites: { type: 'array' },
    emails: { type: 'array' },
    twitters: { type: 'array' },
    facebooks: { type: 'array' },
    phones: { type: 'array' },
    bio: { type: 'longtext' },
    lastElectedDate: { type: 'date' },
    nextElectionDate: { type: 'date' },

    votes: {
      collection: 'vote',
      via: 'voters'
    },

    counties: {
      collection: 'county',
      via: 'representatives'
    },

    articles: {
      collection: 'news',
      via: 'subjects'
    }
  }
};

