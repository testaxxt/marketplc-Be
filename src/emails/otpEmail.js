exports.otpEmail = (otp) => `
  <h3>Your verification code:</h3>
  <h1>${otp}</h1>
  <p>This code expires in 10 minutes.</p>
`;
