/**
 * Legislator.js
 *
 * @description :: Central model for legislator people
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: { type: 'String' },
    party: { type: 'String' }

//     district
//     counties (relation to Counties)
// votes (relation to Votes)
// amendments (relation to Bills)
// photos
// websites
// emails
// twitters
// facebooks
// phones
// bio/background
// news (relation to News)
// caucus memberships
// party
// last-elected-date
// next-election-date
// opinion/commentary articles (relation to Blog)
// "scores" (much to be decided there; see above)

  }
};

