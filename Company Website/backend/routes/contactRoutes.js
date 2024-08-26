const express = require("express");
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/", async (req, res) => {
  const { firstName, lastName, company, email, phoneNumber, message } =
    req.body;
  try {
    const contact = new Contact({
      firstName,
      lastName,
      company,
      email,
      phoneNumber,
      message,
    });
    await contact.save();
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO,
      subject: "New Contact Form Submission",
      text: `You have a new contact form submission from ${firstName} ${lastName}.\n\nMessage: ${message}\n\nCompany: ${company}\nEmail: ${email}\nPhone Number: ${phoneNumber}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ message: "Error sending email" });
      } else {
        res.status(200).json({ message: "Form submitted successfully", info });
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
