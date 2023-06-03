require('dotenv').config()
const mongoose = require('mongoose');
const user = require('../models/User');
const User = mongoose.model('User');

const jwt = require('jsonwebtoken')
const scret = process.env.SECRET;

exports.getFreelancer = (req, res) => {
    User.find({ status: true, perfil: "Freelancer" })

        .then(data => {
            res.status(200).send(data);
        })
        .catch(erro => {
            res.status(400).send(erro);
        });

}
exports.getEmpresa = (req, res) => {
    User.find({ status: true, perfil: "Empresa" })

        .then(data => {
            res.status(200).send(data);
        })
        .catch(erro => {
            res.status(400).send(erro);
        });

}



exports.getByHabilidades = async (req, res) => {
    try {
        const data = await User.find({ habilidades: req.params.habilidades });
        res.status(200).send(data);

    } catch (error) {
        res.status(400).send(erro);

    }

}

exports.getBylocalizacao = async (req, res) => {
    try {
        const data = await User.find({ localizacao: req.params.provincia });
        res.status(200).send(data);

    } catch (error) {
        res.status(400).send(erro);

    }
}






exports.post = (req, res, next) => {

    let newUser = new User(req.body);
    newUser.save()
        .then(x => {

            res.status(201).send({
                mensagem: "Usuario cadastrado com sucesso"
            });

        })
        .catch(e => {
            res.status(400).send({
                mensagem: "erro ao cadastrar Usuario",
                erro: e
            });
        });


}


exports.login = async (req, res) => {

    const { email, senha } = req.body

    try {

        if (!email || !senha) {

            return res.status(400).send({
                msg: 'Por favor, preencha todos os campos.'
            });
        }

        console.log(email, senha);

        console.log(scret)

        const userlogin = await User.findOne({ status: true, senha: senha, email: email });


        if (!userlogin) {
            res.status(400).send({
                msg: 'Email ou senha inválidos'
            });
        } else {

            const token = jwt.sign({ email }, scret, { expiresIn: '10d' })
            res.status(200).send({ token, userlogin });


        }
    } catch (error) {

        res.status(500).send({

            msg: 'Erro interno, por favor tente novamente.',
            error: error
        });
    }



}



exports.put = (req, res, next) => {

    User.findByIdAndUpdate(req.params.id, req.body)
        .then(x => {

            res.status(200).send({
                mensagem: "Freelancer Actualizado com sucesso"
            });
        })
        .catch(e => {
            res.status(400).send({
                message: "Falha ao actualizar o freelancer",
                erro: e
            });
        });


}

