
const mongoose = require('mongoose');
const proposta = require('../models/proposta');
const Proposta = mongoose.model('Proposta');

exports.get = (req, res) => {
    Proposta.find()

        .then(data => {
            res.status(200).send(data); 
        })
        .catch(erro => {
            res.status(400).send({
                mensagem: "erro ao pegar proposta",
                error: erro
            });

        })
}







exports.post = (req, res, next) => {

    let novaProposta = new Proposta(req.body);
    novaProposta.save()
        .then(x => {

            res.status(201).send({
                mensagem: "Proposta cadastrada com sucesso"
            });

        })
        .catch(e => {
            res.status(400).send({
                mensagem: "erro ao cadastrar Proposta",
                erro: e
            });
        });


}

exports.put = (req, res, next) => {

    Proposta.findByIdAndUpdate(req.params.id, req.body)
        .then(x => {

            res.status(200).send({
                mensagem: "Proposta Actualizado com sucesso"
            });
        })
        .catch(e => {
            res.status(400).send({
                message: "Falha ao actualizar o Propostas",
                erro: e
            });
        });


}

