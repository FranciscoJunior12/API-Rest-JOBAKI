const express = require('express');


const contratanteController = require('../controller/contratanteController')
const route = express.Router();



route.post('/', contratanteController.post);
route.get('/', contratanteController.get);

module.exports = route;