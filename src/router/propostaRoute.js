const express = require('express');


const propostaController = require('../controller/propostaController');
const route = express.Router();

route.post('/cadastrar', propostaController.post);
route.get('/', propostaController.get);
// route.get('/:id', propostaController.getById);
route.put('/:id', propostaController.put);



module.exports = route;