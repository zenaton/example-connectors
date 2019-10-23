module.exports.handle = function* () {
  const unsplash = this.connector("unsplash", "YOUR-CONNECTOR-ID")

  // Search images
  yield unsplash.get('/search/photos', { query: { query: "cat" } })
}
