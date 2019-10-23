module.exports.handle = function*(channel) {
  const slack = this.connector("slack", "YOUR-CONNECTOR-ID")

  if (!channel) {
    // Get the list of channels
    const response = yield slack.get("channels.list", { query: { limit: 10 } })
    // for this example, take the first one
    channel = response.data.channels[0]
  }

  // Send a message
  slack.post("chat.postMessage", {
    body: {
      text: "Hey from Zenaton!",
      as_user: true,
      channel: channel
    }
  })
}
