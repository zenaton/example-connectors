module.exports.handle = function*(project_name, project_description) {
  const basecamp = this.connector("basecamp", "YOUR-CONNECTOR-ID")

  const headers = { basecamp_account_id: "YOUR-BASECAMP-ACCOUNT-ID" }

  // List projects
  yield basecamp.get('/projects.json', { headers })

  // Create a project
  const first_project = (yield basecamp.post('/projects.json', { headers, body: { name: project_name } })).data

  // Update a project
  yield basecamp.put(`/projects/${first_project.id}.json`, { headers, body: { description: project_description } })

  // Delete project
  yield basecamp.delete(`/projects/${first_project.id}.json`, { headers })
}
