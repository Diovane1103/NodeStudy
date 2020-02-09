const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'diovane.rossato@acad.pucrs.br',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${ name }. Let me know how you get along with the app.` 
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'diovane.rossato@acad.pucrs.br',
        subject: `Good bye, ${ name }`,
        text: `Is there anything we could have done to let you stay on board? `
    })
}
module.exports = { 
    sendWelcomeEmail,
    sendCancelationEmail
}