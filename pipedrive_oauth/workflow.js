module.exports.handle = function*(contactsToImport) {
  const pipedrive = this.connector("pipedrive_oauth", "<YOUR CONNECTOR ID>");

  for (let i = 0; i < contactsToImport.length; i++) {
    // Create records
    yield pipedrive.post(`/persons`, {
      body: {
        name: contactsToImport[i].name,
        email: [
          {
            label: "work",
            primary: true,
            value: contactsToImport[i].email
          }
        ]
      }
    });
  }
};
