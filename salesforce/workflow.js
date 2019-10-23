module.export.handle = function*() {
  const sf = this.connector("salesforce", "your_connector_id");

  yield sf.get("/data/v46.0", {headers: { salesforce_instance: "your_instance"}});
  // example "eu29" - cf. https://www.asagarwal.com/how-to-determine-your-salesforce-instance-and-its-location
};
