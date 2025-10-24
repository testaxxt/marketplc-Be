const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,   // e.g. smtp.gmail.com
  port: process.env.EMAIL_PORT,   // usually 465 or 587
  secure: process.env.EMAIL_SECURE === 'true', // true for 465
  auth: {
    user: process.env.EMAIL_USER, // your email
    pass: process.env.EMAIL_PASS  // app password or SMTP pass
  }
});

exports.sendEmail = async (to, subject, html) => {
  try {
    await transporter.sendMail({
      from: `"ShopLogsHere" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html
    });
    console.log(`✅ Email sent to ${to}`);
  } catch (error) {
    console.error(`❌ Error sending email: ${error.message}`);
  }
};
