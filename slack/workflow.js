const { workflow } = require("zenaton");

module.exports = workflow("SlackExample", {
  *handle() {
    const slack = this.connector("slack", "YOUR-CONNECTOR-ID");

    // SLACK API IS mostly POST and GET

    // Get the list of channels
    const response = yield slack.get("channels.list", { query: { limit: 10 } });

    const generalChannel = response.data.channels[0];

    // Send a message
    slack.post("chat.postMessage", {
      body: {
        text: "Hey from Zenaton!",
        as_user: true,
        channel: generalChannel.id
      }
    });
  }
});
