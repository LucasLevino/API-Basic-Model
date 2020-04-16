const express = require('express');
const routes = express.Router();


const ProductController = require('./controllers/ProductControllers');

// index
routes.get( "/products" , ProductController.index);

// Cadastro
routes.post( "/products" , ProductController.store);

// Detalhes
routes.get( "/products/:id" , ProductController.show);

// Update
routes.put( "/products/:id" , ProductController.update);

// Delete
routes.delete( "/products/:id" , ProductController.destroy);

module.exports = routes;