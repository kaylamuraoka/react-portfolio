const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  // all of the configuration for making a site send an email.
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

transporter.verify((error, success) => {
  if (error) {
    // if error happened code ends here
    console.error(error);
  } else {
    // this means success
    console.log("Server is ready to take messages");
  }
});

// Post request
router.post("/api/send", (req, res, next) => {
  // make mailable object
  const mailOptions = {
    from: req.body.name,
    to: process.env.EMAIL,
    subject: `New Message from Contact Form: ${req.body.subject}`,
    text: `
    from: 
    ${req.body.name}

    contact: ${req.body.email}

    message:

    ${req.body.text}`,
  };

  // Error handling
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log("Error Occurs");
      res
        .status(500)
        .json({ status: "fail", msg: "Internal error: email not sent" });
      res.json({
        msg: "fail",
      });
    } else {
      console.log("Error Occurs");
      res.status(200).json({
        status: "success",
        msg: "Email sent",
      });
    }
  });
});

module.exports = router;
