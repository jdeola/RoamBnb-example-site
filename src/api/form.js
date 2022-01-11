const dotenv = require('dotenv');
dotenv.config();
const sgMail = require('@sendgrid/mail');



export default function formHandler(req, res) {
    // req.body has the form values
    console.log(req.body);
    
    const dataFields = Object.keys(req.body).map((item)=>`<tr><td>${item}</td><td>${req.body[item]}</td></tr>`);

    sgMail.setApiKey(process.env.GATSBY_SENDGRID_API_KEY)

    const msg = {
        to: 'jeremy@roam-bnb.com', // Change to your recipient
        from: 'jeremy@roam-bnb.com', // Change to your verified sender
        subject: 'New Form Submission!',
        text: Object.values(req.body).join(),
        html: `<table>${dataFields.join('')}</table>`,
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}
