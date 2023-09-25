const nodemailer = require("nodemailer")
const { SENDER_EMAIL,APP_PASSWORD } = process.env;
const SendingMail = (data, subject, reciever) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: {SENDER_EMAIL},
            pass: {APP_PASSWORD}
        }
    });

    var mailOptions = {
        from: {SENDER_EMAIL},
        to: reciever,
        subject: subject,
        html: data
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log("eror occured in sending mail", error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
module.exports = { SendingMail }