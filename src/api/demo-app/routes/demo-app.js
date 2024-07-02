'use strict';

/**
 * demo-app router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::demo-app.demo-app');
