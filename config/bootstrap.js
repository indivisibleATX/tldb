/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */
module.exports.bootstrap = function (cb) {

  if (process.env.NODE_ENV !== 'development')
    return cb();

  // use number of Legislators as a proxy for any data present
  Legislator.count().exec((error, found) => {
    if (found > 0) {
      console.log(`Skipping seeding, there are already ${found} legislators in TLDB.`);
    }
    else {
      require('./seed').seed();
    }
  });

  return cb();
};
