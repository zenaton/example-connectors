const { workflow } = require("zenaton")

module.exports = workflow("UnsplashExample", {
  *handle() {
    const unsplash = this.connector("unsplash", "YOUR-CONNECTOR-ID")

    // Search images
    yield unsplash.get('/search/photos', { query: { query: "cat" } })
  }
})
