const { workflow } = require("zenaton");

workflow("SalesForceExample", {
  *handle() {
    const sf = this.connector('salesforce', "your_connector_id");

    yield sf.get("/data/v46.0", {headers: { salesforce_instance: "your_instance"}});
    // https://www.asagarwal.com/how-to-determine-your-salesforce-instance-and-its-location/
    
  }
});
