module.exports.handle = function*(contactsToImport) {
  const hubspot = this.connector("hubspot", "YOUR-CONNECTOR-ID");

  for (let i = 0; i < contactsToImport.length; i++) {
    // Create records
    yield hubspot.post(`/contacts/v1/contact/`, {
      body: {
        properties: [
          {
            property: "email",
            value: contactsToImport[i].email
          },
          {
            property: "firstname",
            value: contactsToImport[i].firstname
          },
          {
            property: "lastname",
            value: contactsToImport[i].lastname
          }
        ]
      }
    });
  }
};
