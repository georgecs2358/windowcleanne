const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const sendEmail = require("./sendgrid");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(cors({ origin: true }));
app.use(express.static(publicDirectoryPath));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/details", (request, response) => {
  sendEmail(
    request.body.name,
    request.body.phone,
    request.body.email,
    request.body.address,
    request.body.services,
    request.body.frequency
  )
    .then((res) => {
      if (res[0].statusCode === 202) {
        response.status(200).send();
      } else {
        response.status(400).send();
      }
    })
    .catch((err) => {
      console.log(err);
      response.status(400).send();
    });
});

app.get("*", (request, response, err) => {
  response.json({ error: err });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});
