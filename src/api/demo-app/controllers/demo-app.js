'use strict';

/**
 * demo-app controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::demo-app.demo-app');
