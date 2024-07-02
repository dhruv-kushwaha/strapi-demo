'use strict';

/**
 * demo-app service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::demo-app.demo-app');
