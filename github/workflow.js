const { workflow } = require("zenaton");

module.exports = workflow("GithubExample", {
  *handle() {
    const github = this.connector("github", "YOUR-CONNECTOR-ID");

    // List my public repositories
    yield github.get("/user/repos", { query: { visibility: "public" } });

    // Create a new gist
    const response = yield github.post("/gists", {
      body: {
        description: "Hello World Zenaton",
        public: true,
        files: {
          "hello_world.js": {
            content:
              "function hello(name) { \n  console.log('Hello world ' + name) \n }"
          }
        }
      }
    });

    const gistId = response.data.id;

    // Update created gist to change description
    yield github.patch(`/gists/${gistId}`, {
      body: {
        description: "Hello World from Zenaton & Bearer.sh"
      }
    });

    // Add a star to this gist
    yield github.put(`/gists/${gistId}/star`, {
      headers: { "Content-Length": 0 }
    });

    // Finally delete the gist
    yield github.delete(`/gists/${gistId}`);
  }
});
