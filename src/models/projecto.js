
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    empresaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    status: {
        type: Boolean,
        required: true,
        default: true

    }






}, { strict: false });
module.exports = mongoose.model('Projecto', schema);