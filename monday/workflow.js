// You can try the Monday GraphQL API here:
// https://monday.com/developers/v2/try-it-yourself

module.exports.handle = function*(itemName) {
  const monday = this.connector("monday", "YOUR-CONNECTOR-ID");

  // Get the first board
  const board = (yield monday.post(`/`, {
    body: { query: "{ boards(limit: 1) { id name } }" }
  })).data.data.boards[0];

  // Add a new item to the board
  yield monday.post(`/`, {
    body: {
      query: `
        mutation($item_name: String, $board_id: Int!, $column_values: JSON) {
          create_item(item_name: $item_name, board_id: $board_id, column_values: $column_values) {
            id
            name
            column_values {
              title
              value
              additional_info
            }
          }
        }
      `,
      variables: {
        item_name: itemName,
        board_id: parseInt(board.id),
        column_values: '{"status": {"index":0}}'
      }
    }
  });
};
