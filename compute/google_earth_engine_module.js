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
var daterange=ee.List(dataset.toDictionary().get('date_range'));
var years=ee.Dictionary(['start',ee.Date(daterange.get(0)).format().split('-').get(0),'end',ee.Date(daterange.get(1)).format().split('-').get(0)]);
// Years Contain the Start and End year of the dataset used                                          
var floods_occurred=flood_data.reduceRegion({
                                             reducer: ee.Reducer.mean(),
                                             geometry: location,
                                             scale:30,
                                             maxPixels: 1e9}); 
// GEE Reducer used to find value of a pixel                                           
var data_dict=years.combine(floods_occurred).getInfo(); // Dictonary of Start Year,End Year and Flooded Pixels
var nkey='No of Flood Events('+data_dict['start']+'-'+data_dict['end']+')';
out_dict[nkey]=data_dict['flooded']; //Pushing Values to Output Dictionary
} 

/**
*The Function extracts the Elevation of the pixel in meters from SRTM 30m DEM
*@param {double} longitude Longitude of the location ( Defined as Global Variables for Module)
*@param {double} latitude Latitude of the location   ( Defined as Global Variables for Module)
*@returns {Number} Elevation(m) Pushes the elevation value of pixel to output dictonary
*/

function elevation()
{
var location=ee.Geometry.Point(longitude,latitude); // GEE Point Geometry Constructor
var dataset = ee.Image('USGS/SRTMGL1_003');
var elevation_raster = dataset.select('elevation');
var elevation_dict=elevation_raster.reduceRegion({
                                reducer: ee.Reducer.mean(),
                                geometry: location,
                                scale:30,
                                maxPixels: 1e9}).getInfo();
out_dict['elevation(meters)']=elevation_dict['elevation']; // Pushing Value to Output Dictionary
}

/**
*The Analysis Module pushes the variable pullout functions one by one to Google Earth Engine Server
*@param {void} No Parameters
*@returns {void} No Returns
*/

function Analysis_Module()
{
	flood_events();
	elevation()
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
