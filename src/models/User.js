
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({


    perfil: {
        type: String,
        trim: true,
        enum: ['Freelancer', 'Empresa']
    },
    status: {
        type: Boolean,
        required: true,
        default: true

    },

    email: {
        type: String,
        required: true,
        unique: true

    }


}, { strict: false });
module.exports = mongoose.model('User', schema);