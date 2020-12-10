const sgMail = require('@sendgrid/mail');

const sendgridAPIKey =
  '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';
sgMail.setApiKey(sendgridAPIKey);

const sendEmail = (name, phone, email, address, services, frequency) => {
  sgMail.send({
    to: email,
    from: 'wcnortheast.enquiries@gmail.com',
    bcc: 'wcnortheast@gmail.com',
    subject: 'Thanks for registering with WindowClean North East',
    text: `Thanks you for joining us <strong>${name}</strong>, we will contact
      you shortly.`,
    html: `Dear <strong>${name}</strong>,
      <br><br>
      We will be in touch soon about cleaning your property <strong>${address}
      </strong>.
      <br><br>
      We will contact you on <u><strong>${phone}</strong></u>.
      <br><br>
      You have requested the following services: <strong>${services}</strong>.
      <br><br>
      We will attend your property every <strong>${frequency}</strong>.
      <br><br>
      Kind regards,
      <br><br>
      WindowClean North-East
      `
  });
  console.log('Email sent');
};

module.exports = sendEmail;
