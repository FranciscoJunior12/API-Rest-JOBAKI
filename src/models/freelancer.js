
const mongoose = require('mongoose');
const { INTEGER } = require('sequelize');
const Schema = mongoose.Schema;

const schema = new Schema({


    nome: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,

    },

    senha: {
        type: String,
        required: true,



    },

    portifolio: {
        type: String,
        required: true,

    },
    github: {
        type: String,
        required: true,

    },
    linkedin: {
        type: String,
        required: true,

    },
    portifolio: {
        type: String,
        required: true,

    },

    fotoPerfil: {
        type: String,
        required: false,
    },

    tecnologias: {

        type: String,
        required: true,

    },

    experiencia: {
        type: Number,
        required: true,

    },
    pais: {
        type: String,
        required: false,

    },
    provincia: {
        type: String,
        required: true

    },

    status: {
        type: Boolean,
        required: true,
        default: true
    }


});


module.exports = mongoose.model('Freelancer', schema);