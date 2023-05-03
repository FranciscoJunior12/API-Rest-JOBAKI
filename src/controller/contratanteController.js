
const mongoose = require('mongoose');
const contra = require('../models/contratante');
const Contratante = mongoose.model('Cliente');


exports.get = (req, res) => {
    Contratante.find({ status: true }
        )
        .then(data => {

            res.status(200).send(data);
        })
        .catch(erro => {
            res.status(400).send(erro);
        });

}





exports.post = (req, res, next) => {

    let contratante = new Contratante(req.body);
    contratante.save()
        .then(x => {

            res.status(201).send({
                mensagem: "Freelancer cadastrado com sucesso"
            });

        })
        .catch(e => {
            res.status(400).send({
                mensagem: "erro ao cadastrar freelancer",
                data: e
            });
        });


}