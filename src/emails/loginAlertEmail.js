exports.loginAlertEmail = (name) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Alert</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f5f5f5; margin: 0; padding: 0;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding: 20px;">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">
          <tr>
            <td style="padding: 30px; text-align: center;">
              <h2 style="color: #d93025;">Security Alert</h2>
              <p style="color: #555555; font-size: 16px;">Hi ${name},</p>
              <p style="color: #555555; font-size: 16px;">We noticed a new login to your account. If this wasn’t you, please reset your password immediately to secure your account.</p>
              <a href="https://yourwebsite.com/reset-password" style="display: inline-block; margin: 20px 0; padding: 12px 25px; background-color: #d93025; color: #ffffff; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
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
