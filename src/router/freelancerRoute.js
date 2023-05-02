const express = require('express');


const freelancerController = require('../controller/freelancerController')
const route = express.Router();

route.get('/', freelancerController.get);
route.get('/:email', freelancerController.getByEmail);
route.post('/', freelancerController.post);
route.put('/:id', freelancerController.put);
route.delete('/:id', freelancerController.delete);

module.exports = route;