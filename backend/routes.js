const express = require('express');

const routes = express.Router();

const devicesController = require('./controllers/devices');
const categoriesController = require('./controllers/categories');


routes.get('/devices', devicesController.fetchAll);

routes.get('/device/:id', devicesController.fetchOne);

routes.post('/device', devicesController.insertDevice);

routes.delete('/device/:id', devicesController.deleteDevice);

routes.get('/categories', categoriesController.fetchAll);

routes.post('/category', categoriesController.insertCategory);

routes.delete('/category/:id', categoriesController.deleteCategory);

module.exports = routes;