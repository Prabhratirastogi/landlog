// Require client library and private key.
var ee = require('@google/earthengine');
var privateKey = require('./pkey.json');
var longitude=84.74329922964942;
var latitude=25.244007840795;

// Initialize client library and run analysis.
var runAnalysis = function() {
  ee.initialize(null, null, function() {
	var location=ee.Geometry.Point(longitude,latitude);                             
  	var flood_data=ee.ImageCollection("GLOBAL_FLOOD_DB/MODIS_EVENTS/V1").select('flooded').sum();                                         
	var floods_occurred=flood_data.reduceRegion({
                                                reducer: ee.Reducer.mean(),
                                                geometry: location,
                                                scale:30,
                                                maxPixels: 1e9}).getInfo(); 
	console.log(floods_occurred); 
  }, function(e) {
    console.error('Initialization error: ' + e);
  });
};

// Authenticate using a service account.
ee.data.authenticateViaPrivateKey(privateKey, runAnalysis, function(e) {
  console.error('Authentication error: ' + e);
});
