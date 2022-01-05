const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = "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"

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'kheyyon.parker@gmail.com',
    from: 'kheyyon.parker@gmail.com',
    subject: 'This is my first creation!',
    text: 'I hope this one actually get to you.'
})