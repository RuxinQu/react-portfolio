const express = require("express");
const app = express();
const { transporter, router } = require("./api/email");
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
  transporter.verify((err, success) => {
    err
      ? console.log(err)
      : console.log(`=== Server is ready to take messages: ${success} ===`);
  });


});
