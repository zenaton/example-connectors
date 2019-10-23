const { workflow } = require("zenaton")

module.exports = workflow("AsanaExample", {
  *handle() {
    const asana = this.connector("asana", "b975f4f0-f4c9-11e9-9259-a14e85f74896")

    // Get info about me
    const me = yield asana.get("/users/me")

    // List workspaces
    const workspaces = (yield asana.get("/workspaces")).data.data

    const first_workspace = workspaces[0]

    // Create a task
    const payload = {
      body: {
        data: {
          workspace: first_workspace.gid,
          name: 'First task from Zenaton !',
        }
      }
    }
    const new_task = (yield asana.post("/tasks", payload)).data.data
  }
})
