const express = require('express');

const routes = express.Router();

routes.get('/devices', (req, res) => {res.send('<h1>Hi middleware</h1>')});
/*
routes.get('/categories', Controller);

routes.get('/device', Controller);

routes.post('/categories', Controller);

routes.post('/device', Controller);

routes.delete('/categories/:id', Controller);

routes.delete('/device/:id', Controller);*/

module.exports = routes;