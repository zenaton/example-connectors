const { workflow } = require("zenaton")

module.exports = workflow("IntercomExample", {
  *handle() {
    const intercom = this.connector("intercom", "YOUR-CONNECTOR-ID");

    // List users sorted by created_at DESC
    const params = {query: {sort: 'created_at', order: 'desc'}}
    const users = (yield intercom.get('users', params)).data.users

    // Create a user
    const payload = {
      user_id: '125',
      email: 'wash2@serenity.io',
      name: 'Hoban Washburne',
      phone: '555671243'    
    }
    const new_user = yield intercom.post('users', {body: payload})
  }
})
