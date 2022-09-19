# Readme

## Description

Website for WindowClean North East, which is live at *https://www.windowcleannortheast.co.uk*

- Frontend has been written in plain HTML/CSS/JavaScript to be desktop and
  mobile compatible
- NodeJs backend for simply processing registration requests. Uses SendGrid
  to send automated emails

## Build and Run

First create a _.env_ file at the root project directory of the form;

```
PORT=3001
SENDGRID_KEY=[your sendgrid key]
```

where a sendgrid key comes from signing up to sendgrid with a verified sending
email address which in this case is *wcnortheast.enquiries@gmail.com*. The
backend essentially sends all registration details to the client email address
and also the email address of the person signing up

See; *https://docs.sendgrid.com/for-developers/sending-email/quickstart-nodejs*

1. Run `npm install` to reload all node dependencies. To simply run locally,
   execute `npm start`
2. For production build using Docker, execute `docker build -t wcne-img .`
   followed by `docker run -p 80:3001 -d wcne-img`
