exports.welcomeEmail = (name) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to ShopLogs</title>
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
              <p style="margin:4px 0 0;color:#9ca3af;font-size:12px;">Premium Logs Marketplace</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 32px;">
              <h1 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#111827;letter-spacing:-0.3px;">Welcome, ${name}!</h1>
              <p style="margin:0 0 20px;font-size:15px;color:#6b7280;line-height:1.6;">
                Your account is verified and ready to go. ShopLogs gives you access to a curated marketplace of premium bank logs, PayPal accounts, and more — all fresh, all verified, delivered the moment you check out.
              </p>

              <!-- Feature highlights -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
                <tr>
                  <td style="padding:12px 16px;background-color:#f9fafb;border-radius:8px;border:1px solid #f4f4f5;margin-bottom:8px;">
                    <p style="margin:0;font-size:13px;color:#111827;"><strong>Bank Logs</strong> — Chase, Wells Fargo, Barclays &amp; more</p>
                  </td>
                </tr>
                <tr><td style="height:8px;"></td></tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#f9fafb;border-radius:8px;border:1px solid #f4f4f5;">
                    <p style="margin:0;font-size:13px;color:#111827;"><strong>Instant delivery</strong> — logs sent the second your order is placed</p>
                  </td>
                </tr>
                <tr><td style="height:8px;"></td></tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#f9fafb;border-radius:8px;border:1px solid #f4f4f5;">
                    <p style="margin:0;font-size:13px;color:#111827;"><strong>Crypto payments</strong> — BTC, ETH, USDT accepted</p>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background-color:#111827;border-radius:50px;padding:13px 28px;">
                    <a href="https://shoplogshere.com/store" style="color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;">Browse the Store &rarr;</a>
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
                You received this email because you created an account on ShopLogs.
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
