const { workflow } = require("zenaton");

module.exports = workflow("EventbriteExample", {
  *handle() {
    const eventbrite = this.connector("eventbrite", "YOUR-CONNECTOR-ID");

    // Retrieve Information about a User Account
    const user = (yield eventbrite.get("users/me")).data

    // Search for events
    yield eventbrite.get(`events/search`, {query: {q: 'Zenaton', price: 'free'}})

    // Get my first organization
    const organization = (yield eventbrite.get("users/me/organizations")).data.organizations[0]

    // Create an event
    const payload = {
      event: {
        name: {
          html: "Meetup Zenaton from Zenaton"
        },
        online_event: true,
        currency: "USD",
        start: {
          timezone: "America/Los_Angeles",
          utc: "2020-05-10T20:00:00Z"
        },
        end: {
          timezone: "America/Los_Angeles",
          utc: "2020-05-10T20:30:00Z"
        }
      }
    }

    yield eventbrite.post(`organizations/${organization.id}/events`, { body: payload })
  }
})
