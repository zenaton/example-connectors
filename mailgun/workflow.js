module.exports.handle = function* (domain, from, to, subject, text) {
  const mailgun = this.connector("mailgun", "YOUR-CONNECTOR-ID");
  
  // Send an email
  yield mailgun.post(`/${domain}/messages`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: {
      from, to, subject, text
    }
  })
}
