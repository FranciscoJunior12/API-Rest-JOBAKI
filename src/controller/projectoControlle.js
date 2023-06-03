
const mongoose = require('mongoose');
const projecto = require('../models/projecto');
const Projecto = mongoose.model('Projecto');

exports.get = (req, res) => {
    Projecto.find({ status: true })

        .then(data => {
            res.status(200).send(data);
        })
        .catch(erro => {
            res.status(400).send({
                mensagem: "erro ao pegar projectos",
                error: erro
            });

        })
    }


exports.post = (req, res, next) => {

    let newProject = new Projecto(req.body);
    newProject.save()
        .then(x => {

            res.status(201).send({
                mensagem: "Projecto cadastrado com sucesso"
            });

        })
        .catch(e => {
            res.status(400).send({
                mensagem: "erro ao cadastrar projecto",
                erro: e
            });
        });


}

exports.put = (req, res, next) => {

    Projecto.findByIdAndUpdate(req.params.id, req.body)
        .then(x => {

            res.status(200).send({
                mensagem: "Projecto Actualizado com sucesso"
            });
        })
        .catch(e => {
            res.status(400).send({
                message: "Falha ao actualizar o projecto",
                erro: e
            });
        });


}