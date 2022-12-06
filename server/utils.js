const getTrimmedLatLon = (req) => {
  const { lat, lon } = req.query;
  console.log(lat, lon);
  const trimLat = parseFloat(lat).toFixed(2);
  const trimLon = parseFloat(lon).toFixed(2);
  console.info(`forecast fetching for ${trimLat}, ${trimLon}`);
  return { lat: trimLat, lon: trimLon };
};

module.exports = {
  getTrimmedLatLon,
};
