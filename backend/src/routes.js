const express = require('express');

const ContactController = require('./controllers/ContactController');

const routes = express.Router();

routes.get('/', ContactController.index);
routes.get('/dashboard', ContactController.pages);
routes.post('/dashboard', ContactController.create);
routes.delete('/dashboard/:id', ContactController.delete);

module.exports = routes;