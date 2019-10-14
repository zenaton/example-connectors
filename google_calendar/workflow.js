const { workflow } = require("zenaton");

module.exports = workflow("GoogleCalendarExample", {
  *handle() {
    const googleCalendar = this.connector(
      "google_calendar",
      "YOUR-CONNECTOR-ID"
    );

    // Returns the calendars on my calendar list
    const response = yield googleCalendar.get("/users/me/calendarList");

    // Currently logged in calendar
    const primaryCalendar = response.data.items.find(item => item.primary);

    // Creates an event in my primary calendar
    const event = yield googleCalendar.post(
      `/calendars/${primaryCalendar.id}/events`,
      {
        body: {
          summary: "Zenaton google calendar connector demo",
          location: "800 Howard St., San Francisco, CA 94103",
          description: "A chance to hear more about Zenaton",
          start: {
            dateTime: "2019-10-29T09:00:00-07:00",
            timeZone: "America/Los_Angeles"
          },
          end: {
            dateTime: "2019-10-29T17:00:00-07:00",
            timeZone: "America/Los_Angeles"
          }
        }
      }
    );

    // Update the event
    yield googleCalendar.patch(
      `calendars/${primaryCalendar.id}/events/${event.data.id}`,
      {
        body: {
          attendees: [
            { email: "lpage@example.com" },
            { email: "sbrin@example.com" }
          ]
        }
      }
    );

    // Delete the event and send notifications to all the attendees
    yield googleCalendar.delete(
      `calendars/${primaryCalendar.id}/events/${event.data.id}`,
      { query: { sendUpdates: "all" } }
    );
  }
});
