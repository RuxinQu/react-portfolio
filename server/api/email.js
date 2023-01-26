const router = require("express").Router();
const nodemailer = require("nodemailer");
const generateHtml = require("../helpers/generageHtml");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});
const mailOptions = {
  from: process.env.EMAIL,
  to: "ruxinqu@gmail.com",
  subject: "New message from portfolio",
};

router.post("/send", (req, res) => {
  const html = generateHtml(req);
  transporter.sendMail(
    { ...mailOptions, html, text: JSON.stringify(req.body) },
    function (err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Email sent successfully");
      }
    }
  );
  res.status(200).send();
});

module.exports = { transporter, mailOptions, router };
