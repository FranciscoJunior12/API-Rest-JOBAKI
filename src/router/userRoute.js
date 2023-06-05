const express = require('express');


const userController = require('../controller/userController');
const route = express.Router();

route.post('/cadastrar', userController.post);
route.post('/login', userController.login);
route.get('/freelancer', userController.getFreelancer);
route.get('/:id', userController.getById);
route.get('/empresas', userController.getEmpresa);
route.put('/:id', userController.put);


module.exports = route;