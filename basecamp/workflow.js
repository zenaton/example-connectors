module.exports.handle = function*(projectName, projectDescription) {
  const basecamp = this.connector("basecamp", "YOUR-CONNECTOR-ID")

  const headers = { basecamp_account_id: "YOUR-BASECAMP-ACCOUNT-ID" }

  // List projects
  yield basecamp.get('/projects.json', { headers })

  // Create a project
  const firstProject = (yield basecamp.post('/projects.json', { headers, body: { name: projectName } })).data

  // Update a project
  yield basecamp.put(`/projects/${firstProject.id}.json`, { headers, body: { description: projectDescription } })

  // Delete project
  yield basecamp.delete(`/projects/${firstProject.id}.json`, { headers })
}
