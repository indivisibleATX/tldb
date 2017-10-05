/**
 * News.js
 *
 * @description :: Links for news or opinion articles about legislators
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    description: { type: 'string' },
    url: { type: 'string' },

    subjects: {
      collection: 'legislator',
      via: 'articles'
    }
  }
};

