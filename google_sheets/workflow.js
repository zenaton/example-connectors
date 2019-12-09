module.exports.handle = function*(spreadsheetTitle) {
  const google_sheets = this.connector("google_sheets", "YOUR-CONNECTOR-ID");

  // Create a new Spreadsheet
  const spreadsheet = yield google_sheets.post("/", {
    body: { properties: { title: spreadsheetTitle } }
  });

  // Add values to the Spreadsheet
  // Display results:
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
  
  // Append values to the Spreadsheet
  // Display results:
  //     A  B
  //   |------
  // 1 | 1  2
  // 2 | 3  4
  // 3 | 5  6
  // 4 | 7  8
  yield google_sheets.post(`/${spreadsheet.data.spreadsheetId}/values/${range}:append?valueInputOption=RAW`, {
    body: {
      range: range,
      majorDimension: "ROWS",
      values: [[5,6], [7,8]]
    }
  });
};
