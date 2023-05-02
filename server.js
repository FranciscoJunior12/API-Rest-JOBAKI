const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//carragar rotas
const freelancerRoute = require('./src/router/freelancerRoute');


// carregar models
const freelancer = require('./src/models/freelancer');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




//conexao com base de dados
mongoose.connect('mongodb+srv://FranciscoJunior:Tentadenovo12345@cursonodejs.53uweic.mongodb.net/?retryWrites=true&w=majority');



app.use('/freelancer', freelancerRoute);




app.listen(5500, () => {

    console.log('servidor esta rodando em http://localhost:5500');
});