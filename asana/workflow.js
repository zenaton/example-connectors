module.exports.handle = function* (task_name) {
  const asana = this.connector("asana", "YOUR-CONNECTOR-ID");

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
        name: task_name,
      }
    }
  }
  const new_task = (yield asana.post("/tasks", payload)).data.data
}
