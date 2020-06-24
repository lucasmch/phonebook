const express = require('express');

const ContactController = require('./controllers/ContactController');

const routes = express.Router();

routes.get('/', ContactController.index);
routes.post('/', ContactController.create);
routes.delete('/:id', ContactController.delete);

module.exports = routes;