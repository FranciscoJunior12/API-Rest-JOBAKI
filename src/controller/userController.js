require('dotenv').config()
const mongoose = require('mongoose');
const user = require('../models/User');
const User = mongoose.model('User');

const emailService = require('../services/email');

const md5 = require('md5')

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



exports.getById = (req, res) => {
    User.findOne({ status: true, _id: req.params.id })

        .then(data => {
            res.status(200).send(data);
        })
        .catch(erro => {
            res.status(400).send({
                mensagem: "erro ao pegar pegar user",
                error: erro
            });

        })
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

    newUser.senha = md5(req.body.senha);
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

    let { email, senha } = req.body; 

    senha = md5(req.body.senha);
    console.log(senha)
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

            emailService.send(
                email,
                'Verificação De Conta',
                global.EMAIL_TMPL.replace('{0}', "http://localhost:5501/index.html"));
    
            // res.status(201).send({
            //     mensagem: "Cliente cadastrado com sucesso"
            // });

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

