'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'movietrends',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
      },
      EXTEND_PROTOTYPES: {
        Date: false
      }
    },
    APP: {
    }
  };

  if (environment === 'test') {
    ENV.locationType = 'none';
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  ENV.THEMOVIEDB_BASE_IMAGE_URL = 'https://image.tmdb.org/t/p';
  ENV.THEMOVIEDB_BASE_API_URL = 'https://api.themoviedb.org/3';
  ENV.THEMOVIEDB_API_KEY = '';

  return ENV;
};
