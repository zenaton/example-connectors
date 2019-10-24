module.exports.handle = function* (from, to, subject, content) {
  const sendgrid = this.connector("sendgrid", "YOUR-CONNECTOR-ID");

  // Send text email
  const payload = {
    body: {
      personalizations: [
        {
          to: [{ email: to }],
        }
      ],
      content: [{ type: 'text/plain', value: content }],
      subject: subject,
      from: { email: from },
    }
  }
  sendgrid.post("/mail/send", payload)
}
