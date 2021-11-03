const express = require('express');

const routes = express.Router();

const devicesController = require('./controllers/devices');
const categoriesController = require('./controllers/categories');


routes.get('/devices', devicesController.fetchAll);
/*
routes.get('/device', Controller);

routes.post('/device', Controller);

routes.delete('/device/:id', Controller);

routes.get('/categories', Controller);

routes.post('/categories', Controller);

routes.delete('/categories/:id', Controller);

*/

module.exports = routes;