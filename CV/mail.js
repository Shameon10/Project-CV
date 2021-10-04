
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')

var toEmail = "simslo2010@gmail.com"  

const transport = nodemailer.createTransport(sendgridTransport({
    auth : {
        api_key:'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'
    }
}))


transport.sendMail({
    from: 'simslo2002@gmail.com',
    to: toEmail,
    subject: 'Message',
    text: 'I hope this message gets delivered!'
})
.catch(err => console.log(err))

