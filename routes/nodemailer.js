const nodemailer = require("nodemailer")
const { NODE_ENV } = process.env;
const SendingMail = (data, subject, reciever) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.APP_EMAIL,
            pass: process.env.APP_PASSWORD
        }
    });

    var mailOptions = {
        from: 'techdome8@gmail.com',
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