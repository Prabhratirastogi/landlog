// Require client library and private key.
var ee = require('@google/earthengine');
var privateKey = require('./pkey.json');

// Sample Locations
var longitude=84.74329922964942;
var latitude=25.244007840795;

// Error Functions
var Authorisation_Error=function (e)
				{console.error('Authentication error: ' + e);}
var Initialization_Error=function (e)
				{console.error('Initialization Error: '+e);}
// Analysis Functions
var flood=function ()
	{
	      var location=ee.Geometry.Point(longitude,latitude);                             
  	      var flood_data=ee.ImageCollection("GLOBAL_FLOOD_DB/MODIS_EVENTS/V1").select('flooded').sum();                                         
	      var floods_occurred=flood_data.reduceRegion({
                                                           reducer: ee.Reducer.mean(),
                                                           geometry: location,
                                                           scale:30,
                                                           maxPixels: 1e9}).getInfo(); 
	console.log(floods_occurred); 
	}
// Initialise Analysis
var runAnalysis=function ()
		{ee.initialize(null,null,flood,Initialization_Error);}
// Authenticate Analysis
ee.data.authenticateViaPrivateKey(privateKey,runAnalysis,Authorisation_Error);
