
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    freelancerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    
    projectoID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Projecto',
        required: true
    },

    status: {
        type: Boolean,
        required: true,
        default: true
    }


}, { strict: false });
module.exports = mongoose.model('Proposta', schema);