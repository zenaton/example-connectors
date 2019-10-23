module.exports.handle = function*(baseId) {
  const airtable = this.connector("airtable", "YOUR-CONNECTOR-ID");

  // Create records
  yield airtable.post(`/Opportunities`, {
    headers: { base_id: baseId },
    body: {
      records: [
        {
          fields: {
            "Opportunity Name": "BPS Pilot",
            Owner: {
              id: "usrijG9SC4EQlq5cm",
              email: "kat+collab15@airtable.com",
              name: "Jess Patel"
            },
            Status: "Qualification",
            Interactions: ["rec2LIa5prvqz3Ska", "recbhNzNWiMkL2Khp"],
            Account: ["recBi6MRHpodNwTDW"],
            "Primary Contact": ["rec78XbbVPLmhTSkp"],
            "Key Decision Maker": ["rec6PL3YVarA7HgST"],
            Priority: "Medium",
            "Estimated Value": 10000,
            "Proposal Deadline": "2017-06-14",
            "Expected Close Date": "2017-07-12"
          }
        }
      ]
    }
  });

  // List records
  const records = yield airtable.get(`/Opportunities`, {
    headers: { base_id: baseId },
    query: { maxRecords: 3, view: "Value by Stage" }
  });
};
