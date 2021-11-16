/**
*Latitude of a point, user defined, passed externally
*/
var longitude=84.74329922964942;
/**
*Longitude of a point, user defined, passed externally
*/
var latitude=25.244007840795;
/**
*Variable ee Loads the Google Earth Engine npm module from the working directory
*/
var ee = require('@google/earthengine');

var out_dict={}; // Dictonary for Output
/**
*Variable Private Key loads the google service account private key for authentication
*NOTE : Both Google Earth Engine npm module and private key must in the working directory
*Warning: Access to the service account resources is done by the private key. Changes in the same leads to lose of access to the resources.
*/
var privateKey = require('./pkey.json');

/** 
*The Authentication_Error function provides information regarding the authorisation failures. Usally happens when the Privatekey is not valid or while having trouble in connecting to the Google Earth Engine Server
*@param {string} error_message The Error Message from Google Earth Engine Server
*@returns {string} Authentication Error Message
*/
var Authorisation_Error=function (error_message)
				{console.error('Authentication error: ' + error_message);}
/**
*The Initialization_Error function provides information regarding Earth Engine Initilaization failures. Usually occurs as errors in analysis or program flow
*@param {string} error_message Error Message from Google Earth Engine Server.
*@returns {string} Initilization Error Message
*/
function Initialization_Error(error_message)
				{console.error('Initialization Error: '+error_message);}
/**
*Fuction identifies the number of times the particular pixel has flooded. Pixel locations are conveyed to the function as latitude and longitude varibles of the entire module. 
*@param {double} longitude Longitude of the location ( Defined as Global Variables for Module)
*@param {double} latitude Latitude of the location   ( Defined as Global Variables for Module)
*@returns {Number} Number of flood events in location for a time range to Output Dictonary
*/
function flood_events ()
{
var location=ee.Geometry.Point(longitude,latitude);    // GEE Point Geometry Constructor                         
var dataset=ee.ImageCollection("GLOBAL_FLOOD_DB/MODIS_EVENTS/V1")
var flood_data=dataset.select('flooded').sum();	// Flooded Pixels marked by 1 in all years	                                         
var floods_occurred=flood_data.reduceRegion({
                                             reducer: ee.Reducer.mean(),
                                             geometry: location,
                                             scale:30,
                                             maxPixels: 1e9}).getInfo(); 
// GEE Reducer used to find value of a pixel                                           
var flooded=floods_occurred['flooded'];
out_dict['No of Flood Events']=flooded;
if (flooded<=3)
	out_dict['Flood Serverity']='Low'
else if (flooded>3 && flooded<=6)
	out_dict['Flood Serverity']='Medium'
else if (flooded>6 && flooded<=9)
	out_dict['Flood Serverity']='High'
else if (flooded>=10)
	out_dict['Flood Serverity']='Very High'
}

/**
*The Function extracts the Elevation of the pixel in meters from SRTM 30m DEM
*@param {double} longitude Longitude of the location ( Defined as Global Variables for Module)
*@param {double} latitude Latitude of the location   ( Defined as Global Variables for Module)
*@returns {Number} Elevation(m) Pushes the elevation value of pixel to output dictonary
*/

function elevation()
{
var location=ee.Geometry.Point(longitude,latitude);
var dataset = ee.Image('USGS/SRTMGL1_003');
var elevation_raster = dataset.select('elevation');
var elevation_dict=elevation_raster.reduceRegion({
                                reducer: ee.Reducer.mean(),
                                geometry: location,
                                scale:30,
                                maxPixels: 1e9}).getInfo();
out_dict['Elevation(meters)']=elevation_dict['elevation'];
}
/**
*The Function extracts the Palmer Drought Severity Index of the pixel  from TerraClimate dataset. The Parameters are passed explicitly
*@param {double} longitude Longitude of the location ( Defined as Global Variables for Module)
*@param {double} latitude Latitude of the location   ( Defined as Global Variables for Module)
*@returns {Number} PDSI Value and Drought Classification
*/
function pdsi_index()
{
  var location=ee.Geometry.Point(longitude,latitude);
  var imc=ee.ImageCollection("IDAHO_EPSCOR/TERRACLIMATE")
  var img=imc.limit(1, 'system:time_start', false).first()
            .select('pdsi').divide(100);
  var pdsi_location=img.reduceRegion({reducer: ee.Reducer.mean(),
                                           geometry: location,
                                           scale:4000,
                                           maxPixels: 1e9}).get('pdsi')
                                           .getInfo();
  out_dict['Palmer Drought Index']=pdsi_location;
  if(pdsi_location>=4.0)
    out_dict['Drought Condition']='Extreme Wet Condition';
  else if(pdsi_location>=3.0 && pdsi_location<=3.99)
    out_dict['Drought Condition']='Severe Wet Condition';
  else if(pdsi_location>=2 && pdsi_location<=2.99)
    out_dict['Drought Condition']='Moderate Wet Condition';
  else if(pdsi_location>=1 && pdsi_location<=1.99)
    out_dict['Drought Condition']='Mild Wet Condition';
  else if(pdsi_location>=-1 && pdsi_location<=0.99)
    out_dict['Drought Condition']='Normal';
  else if(pdsi_location>=-1 && pdsi_location<=-1.99)
    out_dict['Drought Condition']='Mild Dry Condition';
  else if(pdsi_location>=-2 && pdsi_location<=-2.99)
    out_dict['Drought Condition']='Moderate Dry Condition';
  else if(pdsi_location>=-3 && pdsi_location<=-3.99)
    out_dict['Drought Condition']='Severe Dry Condition';
  else
    out_dict['Drought Condition']='Extreme Dry Condition';
}

function water_level()
{
  var location=ee.Geometry.Point(longitude,latitude);
  var runoff=ee.ImageCollection("IDAHO_EPSCOR/TERRACLIMATE")
             .filterBounds(location).mean();
  var runoff_level=runoff.reduceRegion({reducer: ee.Reducer.mean(),
                                           geometry: location,
                                           scale:4000,
                                           maxPixels: 1e9}).get('ro')
                                           .getInfo();
  out_dict['Runoff(mm)']=runoff_level;
  
}

/**
*The Analysis Module pushes the variable pullout functions one by one to Google Earth Engine Server
*@param {void} No Parameters
*@returns {void} No Returns
*/

function Analysis_Module()
{
	flood_events();
	elevation();
	pdsi_index();
	water_level();
	console.log(out_dict)
}

/**
*Coveys the Analysis Module to Google Earth Engine Server
*/
var runAnalysis=function ()
		{ee.initialize(null,null,Analysis_Module,Initialization_Error);}
/**
*Checks the user account authentication with Google Earth Engine Server
*@param privatekey {object} The key to authenticate service account
*@param runAnalysis {function} The analysis module for the Google Earth Engine Server
*@param Authorisation_Error {function} Function to display error if failed
*@returns Authrisation_Error message if failed
*/
ee.data.authenticateViaPrivateKey(privateKey,runAnalysis,Authorisation_Error);
