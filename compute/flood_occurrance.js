//var longitude=84.74329922964942;
//var latitude=25.244007840795; 'Sample Location'

function flood_occurance(longitude,latitude)
{
  var location=ee.Geometry.Point(longitude,latitude);                             // Creating Google Earth Engine Point Geometry of Location
  
  var flood_data=ee.ImageCollection("GLOBAL_FLOOD_DB/MODIS_EVENTS/V1")
                .select('flooded').sum();                                        // Derived Flood Occurrance of each pixel using Global Flood Database V1 containing 
                                                                                  //flood events from 2000 to 2018.
  
  var floods_occurred=flood_data.reduceRegion({
                                                reducer: ee.Reducer.mean(),
                                                geometry: location,
                                                scale:30,
                                                maxPixels: 1e9});                 //  Retrive the flood occurrance value from the location pixel
  return floods_occurred.get('flooded');
  
}
