module.exports.handle = function*(list, contacts) {
  const mailchimp = this.connector("mailchimp_oauth", "YOUR-CONNECTOR-ID");

  const members = contacts.map(contact => {
    return {
      email_address: contact.email,
      email_type: "html",
      status: "subscribed"
    };
  });

  // Add members to default list
  mailchimp.post("/lists/<MY LIST ID>", {
    body: {
      members: members
    }
  });
};
