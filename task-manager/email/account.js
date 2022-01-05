const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = "my supposed api key which nobody should see at all!"

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'kheyyon.parker@gmail.com',
    from: 'kheyyon.parker@gmail.com',
    subject: 'This is my first creation!',
    text: 'I hope this one actually get to you.'
})
