module.exports.handle = function*(username, repo_slug) {
  const bitbucket = this.connector("bitbucket", "YOUR-CONNECTOR-ID");

  // Get open pull-requests for a given username/repo_slug
  const prs = yield bitbucket.get(
    `/repositories/${username}/${repo_slug}/pullrequests`,
    {
      query: { state: "OPEN" }
    }
  );
};
