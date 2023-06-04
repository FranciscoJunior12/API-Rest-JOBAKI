const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

//carragar rotas
const freelancerRoute = require('./src/router/freelancerRoute');
const contratanteRoute = require('./src/router/contratanteRoute');

const userRoute = require('./src/router/userRoute');
const projectoRoute = require('./src/router/projectoRoute');
const propostaRoute = require('./src/router/propostaRoute');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



//conexao com base de dados
mongoose.connect('mongodb+srv://FranciscoJunior:Tentadenovo12345@cursonodejs.53uweic.mongodb.net/?retryWrites=true&w=majority');



app.use('/freelancers', freelancerRoute);
app.use('/contratantes', contratanteRoute);
app.use('/users', userRoute);
app.use('/projectos', projectoRoute);
app.use('/propostas', propostaRoute);

app.get("/", (req, res) => {
    res.send('Isso é um teste');
})


app.listen(5500, () => {

    console.log('servidor esta rodando em http://localhost:5500');
});