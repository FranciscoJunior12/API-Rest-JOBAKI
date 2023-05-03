const mongoose = require('mongoose');
const freela = require('../models/freelancer')
const Freelancer = mongoose.model('Freelancer');



exports.get = (req, res) => {
    Freelancer.find({ status: true },)
        .then(data => {

            res.status(200).send(data);
        })
        .catch(erro => {
            res.status(400).send(erro);
        });

}


exports.getByEmail = (req, res) => {
    Freelancer.findOne({ status: true, email: req.params.email })
        .then(data => {

            res.status(200).send(data);
        })
        .catch(erro => {
            res.status(400).send(erro);
        });

}




exports.post = (req, res, next) => {

    let freelancer = new Freelancer(req.body);
    freelancer.save()
        .then(x => {

            res.status(201).send({
                mensagem: " Freelancer cadastrado com sucesso"
            });

        })
        .catch(e => {
            res.status(400).send({
                mensagem: "erro ao cadastrar freelancer",
                erro: e
            });
        });


}



exports.put = (req, res, next) => {

    Freelancer.findByIdAndUpdate(req.params.id, {
        $set: {

            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            experiencia: req.body.experiencia,
            habilidades: req.body.habilidades,
            avatar: req.body.avatar,
            portifolio: req.body.portifolio,
            status: req.body.status

        }
    })
        .then(x => {

            res.status(200).send({
                message: "Freelancer Actualizado com sucesso"
            });
        })
        .catch(e => {
            res.status(400).send({
                message: "Falha ao actualizar o freelancer",
                erro: e
            });
        });


}

exports.delete = (req, res, next) => {

    Freelancer.findByIdAndUpdate(req.params.id, {

        $set: {
            status: false
        }

    })
        .then(x => {

            res.status(200).send({
                message: "Freelancer removido  com sucesso"
            });
        })
        .catch(e => {
            res.status(400).send({
                message: "Falha ao remover freelancer",
                erro: e
            });
        });


}