import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { "Full Name": name, "Email Address": email, "Contact Number": phone, "Company Name": company, "Inquiry Details": message } = req.body;

  // We are using the app password provided by the user.
  // We rely exclusively on Vercel Environment Variables for security.
  const password = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, '');

  if (!password) {
    console.error('CRITICAL: Missing GMAIL_APP_PASSWORD environment variable');
    return res.status(500).json({ error: 'Server misconfiguration: Email credentials not found' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'akshayagoldencrust@gmail.com',
      pass: password
    }
  });

  try {
    await transporter.sendMail({
      from: `"Akshaya Golden Crust" <akshayagoldencrust@gmail.com>`,
      to: 'akshayagoldencrust@gmail.com',
      replyTo: email,
      subject: `New Trade Inquiry from ${name} - Akshaya Golden Crust`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #eaeaea; border-radius: 12px; background-color: #fcfcfc;">
          <div style="text-align: center; margin-bottom: 25px;">
            <h1 style="color: #0B2519; font-size: 24px; margin: 0;">New Trade Inquiry</h1>
            <p style="color: #666; font-size: 14px; margin-top: 5px;">Received via website</p>
          </div>
          
          <div style="background-color: white; padding: 25px; border-radius: 8px; border: 1px solid #f0f0f0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; color: #888; width: 120px;"><strong>Full Name:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; color: #333;">${name || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; color: #888;"><strong>Email Address:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; color: #333;"><a href="mailto:${email}" style="color: #cfad6c; text-decoration: none;">${email || 'N/A'}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; color: #888;"><strong>Contact Number:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; color: #333;">${phone || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; color: #888;"><strong>Company:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f5f5f5; color: #333;">${company || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 15px 0 5px; color: #888;" colspan="2"><strong>Inquiry Details:</strong></td>
              </tr>
              <tr>
                <td style="padding: 10px; background-color: #f9f9f9; border-radius: 6px; color: #444; font-size: 15px; line-height: 1.6;" colspan="2">
                  ${(message || 'No additional details provided.').replace(/\n/g, '<br>')}
                </td>
              </tr>
            </table>
          </div>
          
          <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #aaa;">
            This email was sent automatically from Akshaya Golden Crust website.
          </div>
        </div>
      `
    });

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
