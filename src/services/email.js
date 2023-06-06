'use strict';
const sgMail = require('@sendgrid/mail');
const config = require('../../config');
sgMail.setApiKey(config.sendgridKey);


exports.send = (to, subject, body) => {


    sgMail.send({
        to: to,
        from: 'franciscomanueldomingosj@gmail.com',
        subject: subject,

        html: body,
    })
        .then(() => {
            console.log('E-mail enviado com sucesso!');
        })
        .catch((error) => {
            console.error(error);
        });

}