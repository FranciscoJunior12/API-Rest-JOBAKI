
const mongoose = require('mongoose');
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
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Por favor, informe um endereço de e-mail válido']
    },

    senha: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[^\da-zA-Z]).{8,}$/.test(v);
            },
            message: 'A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um número, um caractere especial e um caractere não alfanumérico'
        }


    },

    status: {
        type: Boolean,
        required: true,
        default: true
    }


});


module.exports = mongoose.model('Cliente', schema);