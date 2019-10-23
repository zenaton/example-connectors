module.exports.handle = function*(spreadsheetTitle) {
  const google_sheets = this.connector("google_sheets", "YOUR-CONNECTOR-ID");

  // Create a new Spreadsheet
  const spreadsheet = yield google_sheets.post("/", {
    body: { properties: { title: spreadsheetTitle } }
  });

  // Add some values to the Spreadsheet
  // Will results in:
  //     A  B
  //   |------
  // 1 | 1  2
  // 2 | 3  4
  const range = "A1:B2";
  yield google_sheets.put(
    `/${spreadsheet.data.spreadsheetId}/values/${range}`,
    {
      query: {
        valueInputOption: "RAW"
      },
      body: {
        range: range,
        majorDimension: "ROWS",
        values: [[1, 2], [3, 4]]
      }
    }
  );
};
