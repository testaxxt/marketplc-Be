exports.otpEmail = (otp) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verification Code</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f5f5f5; margin: 0; padding: 0;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding: 20px;">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">
          <tr>
            <td style="padding: 30px; text-align: center;">
              <h2 style="color: #333333;">Your Verification Code</h2>
              <p style="color: #555555; font-size: 16px;">Use the code below to verify your account. This code is valid for 10 minutes.</p>
              <h1 style="color: #1a73e8; font-size: 48px; margin: 20px 0;">${otp}</h1>
              <p style="color: #777777; font-size: 14px;">If you did not request this code, please ignore this email.</p>
              <hr style="border: none; border-top: 1px solid #eeeeee; margin: 30px 0;">
              <p style="color: #999999; font-size: 12px;">&copy; 2025 ShopLogs. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
