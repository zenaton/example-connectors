module.exports.handle = function*(address, type = "restaurant", radius = 10, maxprice = 2) {
  const googlePlaces = this.connector("google_places", "YOUR-CONNECTOR-ID");

  // Get places near a location
  const places = yield googlePlaces.get("/textsearch/json", {
    query: {
      query: address,
      type: type,
      radius: radius,
      maxprice: maxprice
    }
  });
};
