const Newsletter = require("../models/newsletterModel");

const nodemailer = require('nodemailer');

// Function to send an email
const sendEmail = async (toEmail, subject, message) => {
  // Create a transporter using your email service provider's SMTP settings
  const transporter = nodemailer.createTransport({
    host: "mail.zmediostech.com",
      port: 465,
      secure: true,
    auth: {
      user: process.env.SERVEREMAILID, // Your email address
      pass: process.env.SERVEREMAILPASSWORD // Your email password or an app-specific password
    }
  });

  // Define the email options
//   console.log(toEmail, subject, message)
  const mailOptions = {
    from: `Zmedios <info@zmediostech.com>`, // Sender's email address
    to: toEmail, // Recipient's email address
    subject: subject, // Email subject
    html: message // Email body
  };

  try {
    // Use the transporter to send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};




exports.addToNewsletter = async (req, res, next) => {
    let newEmail = await Newsletter.create(req.body);

    //send email to zmedios as well
    res.status(200).json({
        status: "success",

    })
  };

exports.needhelp = async (req, res, next) => {
    console.log(req.body)
    let message = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZMedios Mail</title>
    <link href="https://fonts.googleapis.com/css2?family=Fahkwang:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Fahkwang', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #eaeaea; /* Updated background for better visibility */
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .card {
            width: 100%;
            max-width: 500px; /* Set the width of the card */
            background-color: #ffffff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            overflow: hidden;
            margin: 20px;
        }
        .header {
            background-color: #E55A2F; /* Darker orange for contrast */
            padding: 20px;
            text-align: center;
        }
        .header img {
            height: auto; /* Adjust height based on actual logo dimensions */
            width: 120px; /* Adjust width to keep logo sharp */
        }
        .content {
            padding: 20px;
            color: #333;
            line-height: 1.6;
            border: 2px solid #E55A2F;
            border-radius: 0 0 6px 6px
        }
        .content h2, .content p {
            margin: 0 0 10px 0;
        }
        .content h2 strong {
            color: #E55A2F; /* Match header color */
        }
        .footer {
            background-color: #fff;
            color: #333;
            padding: 10px 20px;
            text-align: center;
            font-size: 0.8em;
            border-top: 1px solid #eee;
        }
    </style>
    </head>
    <body>
    
    <div class="card">
        <div class="header">
            <img src="https://zmediostech.com/assets/logo/logo-light.png" alt="ZMedios Logo">
        </div>
        <div class="content">
            <h2><strong>From:</strong> ${req.body.email}</h2>
            <p><strong>Branch:</strong> ${req.body.branch}</p>
            <p><strong>Time Period:</strong> ${req.body.timeperiod}</p>
            <p><strong>Message:</strong> ${req.body.message}</p>
        </div>
        <div class="footer">
            &copy; 2024 ZMediosTech. All rights reserved.
        </div>
    </div>
    
    </body>
    </html>
    
    `
    //send email to zmedios as well
    sendEmail('info@zmediostech.com', 'Zmedios Email', message )
    res.status(200).json({
        status: "success",

    })
    // res.status(200).redirect("/");

  };


  exports.contactform = async (req, res, next) => {
    console.log(req.body)
    let message = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZMedios Mail</title>
    <link href="https://fonts.googleapis.com/css2?family=Fahkwang:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Fahkwang', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #eaeaea; /* Updated background for better visibility */
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .card {
            width: 100%;
            max-width: 500px; /* Set the width of the card */
            background-color: #ffffff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            overflow: hidden;
            margin: 20px;
        }
        .header {
            background-color: #E55A2F; /* Darker orange for contrast */
            padding: 20px;
            text-align: center;
        }
        .header img {
            height: auto; /* Adjust height based on actual logo dimensions */
            width: 120px; /* Adjust width to keep logo sharp */
        }
        .content {
            padding: 20px;
            color: #333;
            line-height: 1.6;
            border: 2px solid #E55A2F;
            border-radius: 0 0 6px 6px
        }
        .content h2, .content p {
            margin: 0 0 10px 0;
        }
        .content h2 strong {
            color: #E55A2F; /* Match header color */
        }
        .footer {
            background-color: #fff;
            color: #333;
            padding: 10px 20px;
            text-align: center;
            font-size: 0.8em;
            border-top: 1px solid #eee;
        }
    </style>
    </head>
    <body>
    
    <div class="card">
        <div class="header">
            <img src="https://zmediostech.com/assets/logo/logo-light.png" alt="ZMedios Logo">
        </div>
        <div class="content">
            <h2><strong>From:</strong> ${req.body.email}</h2>
            <p><strong>Name:</strong> ${req.body.name}</p>
            <p><strong>Phone:</strong> ${req.body.phone}</p>
            <p><strong>Subject:</strong> ${req.body.subject}</p>
            <p><strong>Message:</strong> ${req.body.message}</p>
        </div>
        <div class="footer">
            &copy; 2024 ZMediosTech. All rights reserved.
        </div>
    </div>
    
    </body>
    </html>
    
    `
    //send email to zmedios as well
    sendEmail('info@zmediostech.com', 'Zmedios Email', message )
    res.status(200).json({
        status: "success",

    })
    // res.status(200).redirect("/");

  };