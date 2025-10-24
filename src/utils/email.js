const { Resend } = require('resend');  // <-- note the destructuring
const dotenv = require('dotenv');

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

exports.sendEmail = async (to, subject, html) => {
  try {
    const response = await resend.emails.send({
      from: 'no-reply@shoplogshere.com', // must be verified in Resend
      to,
      subject,
      html,
    });
    console.log(`✅ Email sent to ${to}`, response);
  } catch (error) {
    console.error(`❌ Error sending email: ${error.message}`);
  }
};
