const { workflow } = require("zenaton");

module.exports = workflow("TypeformExample", {
  *handle() {
    const typeform = this.connector("typeform", "YOUR-CONNECTOR-ID");

    // Retrieve forms
    const forms = (yield typeform.get('forms')).data.items

    const first_form = forms[0]

    // Get form responses
    const responses = (yield typeform.get(`forms/${first_form.id}/responses`)).data.items
  }
})
