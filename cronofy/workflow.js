const { workflow } = require("zenaton")

module.exports = workflow("CronofyExample", {
  *handle() {
    const cronofy = this.connector("cronofy", "YOUR-CONNECTOR-ID");

    // List calendars
    const calendars = (yield cronofy.get("/calendars")).data.calendars
    
    const first_calendar = calendars[0]

    // Create an event
    const payload = {
      event_id: "qTtZdczOccgaPncGJaCiLg",
      summary: "Board meeting",
      description: "Discuss plans for the next quarter.",
      start: "2020-08-05T15:30:00Z",
      end: "2020-08-05T17:00:00Z",
      location: {
        "description": "Board room"
      }
    }
    const new_event = (yield cronofy.post(`calendars/${first_calendar.calendar_id}/events`, {body: payload})).data
  }
})