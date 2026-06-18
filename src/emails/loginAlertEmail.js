exports.loginAlertEmail = (name) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New login detected — ShopLogs</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f5;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e4e4e7;">

          <!-- Header -->
          <tr>
            <td style="background-color:#111827;padding:28px 40px;">
              <p style="margin:0;color:#ffffff;font-size:18px;font-weight:700;letter-spacing:-0.3px;">ShopLogs</p>
              <p style="margin:4px 0 0;color:#9ca3af;font-size:12px;">Security Alert</p>
            </td>
          </tr>

          <!-- Alert banner -->
          <tr>
            <td style="background-color:#fef2f2;border-bottom:1px solid #fecaca;padding:14px 40px;">
              <p style="margin:0;font-size:13px;font-weight:600;color:#991b1b;">&#9888; New login activity detected on your account</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px 32px;">
              <h1 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#111827;letter-spacing:-0.3px;">Hi ${name},</h1>
              <p style="margin:0 0 24px;font-size:15px;color:#6b7280;line-height:1.6;">
                We noticed a new sign-in to your ShopLogs account. If this was you, no action is needed.
              </p>

              <!-- Info box -->
              <div style="background-color:#f9fafb;border:1px solid #e4e4e7;border-radius:10px;padding:20px;margin-bottom:28px;">
                <p style="margin:0 0 6px;font-size:12px;font-weight:600;color:#9ca3af;letter-spacing:0.06em;text-transform:uppercase;">Login details</p>
                <p style="margin:0;font-size:14px;color:#374151;line-height:1.8;">
                  Time: <strong style="color:#111827;">${new Date().toUTCString()}</strong>
                </p>
                <p style="margin:0;font-size:13px;color:#6b7280;margin-top:8px;">
                  If you didn't sign in, your account may be at risk. Change your password immediately.
                </p>
              </div>

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background-color:#dc2626;border-radius:50px;padding:13px 28px;">
                    <a href="https://shoplogshere.com/login" style="color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;">Secure My Account &rarr;</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr><td style="padding:0 40px;"><hr style="border:none;border-top:1px solid #f4f4f5;margin:0;" /></td></tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;">
              <p style="margin:0;font-size:12px;color:#9ca3af;line-height:1.6;">
                &copy; ${new Date().getFullYear()} ShopLogs. All rights reserved.<br/>
                If you have questions, contact our support team.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
