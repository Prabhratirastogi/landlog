# Compute (GIS Algorithms backend)
## Google Earth Engine Functions
#### Essential
A Google Service Account, with Google Earth Engine enabled, Private Key is needed to access the service
#### Input 
Coordinates of the point as (longitude,latitude)
#### Performs
The functions in gee_module.js takes the latitude and longitude of a location to retrive 
* No of Flood Events Occurred
* Flood Serverity
* Elevation in Meters
* Palmer Drought Index
* Drought Severity

from the Google Earth Engine API using the private key 
#### Output
A dictonary of the information
