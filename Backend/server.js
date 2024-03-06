// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { userEmail, products } = req.body;

  // Configure Nodemailer with your email service credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  });

  // Email content
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'website-owner-email@example.com',
    subject: 'New Quote Request',
    html: `<p>User Email: ${userEmail}</p><p>Products: ${JSON.stringify(products)}</p>`,
  };

  try {
    // Send email to website owner
    await transporter.sendMail(mailOptions);

    // Send confirmation email to the user
    mailOptions.to = userEmail;
    mailOptions.subject = 'Your Quote Request Confirmation';
    mailOptions.html = '<p>Your quote request has been received. We will get back to you shortly.</p>';

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Emails sent successfully.' });
  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).json({ success: false, message: 'Error sending emails.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
