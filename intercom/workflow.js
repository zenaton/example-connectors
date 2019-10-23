module.exports = function*(id, email, name) {
  const intercom = this.connector("intercom", "YOUR-CONNECTOR-ID")

  // List users sorted by created_at DESC
  const params = { query: { sort: 'created_at', order: 'desc' } }
  const users = (yield intercom.get('users', params)).data.users

  // Create a user
  const payload = {
    user_id: id,
    email: email,
    name: name
  }
  const new_user = yield intercom.post('users', { body: payload })
}
