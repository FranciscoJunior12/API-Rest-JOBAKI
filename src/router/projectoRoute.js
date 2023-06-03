const express = require('express');


const projectoController = require('../controller/projectoControlle');
const route = express.Router();

route.post('/cadastrar', projectoController.post);
route.get('/', projectoController.get);
route.put('/:id', projectoController.put);



module.exports = route;