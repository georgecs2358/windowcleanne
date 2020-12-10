const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const sendEmail = require('./sendgrid');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(cors({origin: true}));
app.use(express.static(publicDirectoryPath));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/response-msg', (request, response) => {
  console.log('Registration message sent from back-end.');
  response.status(200).send({
    msg: 'Thank you for registering, we will be in touch...',
  });
});

app.post('/details', (request, response) => {
  console.log('Registration details sent to back-end.');
  console.log(request.body);
  sendEmail(
    request.body.name,
    request.body.phone,
    request.body.email,
    request.body.address,
    request.body.services,
    request.body.frequency
  );
  response.status(200).send();
});

app.get('*', (request, response, err) => {
  response.json({error: err});
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});
