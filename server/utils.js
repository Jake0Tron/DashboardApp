const getTrimmedLatLon = (req) => {
  const { lat, lon } = req.query;

  const trimLat = parseFloat(lat).toFixed(2);
  const trimLon = parseFloat(lon).toFixed(2);

  return { lat: trimLat, lon: trimLon };
};

module.exports = {
  getTrimmedLatLon,
};
