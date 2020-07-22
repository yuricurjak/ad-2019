"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _nodemailer = require('nodemailer'); var _nodemailer2 = _interopRequireDefault(_nodemailer);

exports. default = async (input) => {
  try {
    const transporter = _nodemailer2.default.createTransport({
      host: process.env.MAIL_SMTP_HOST,
      port: process.env.MAIL_SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });
  
    const mailOptions = {
      from: `\"${process.env.MAIL_NAME}\" <${process.env.MAIL_FROM}>`,
      to: input.email,
      subject: process.env.MAIL_SUBJECT,
      text: `Seu amigo secreto é ${input.name}`,
    }
  
    const info = await transporter.sendMail(mailOptions);
    console.log('sendMail', info)
    return info;
  } catch (err) {
    console.log(err);
    throw 'error sendMail';
  }
  

} 
