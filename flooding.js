const get_flooding_probability = (long, lat) => {
  /*
  ** 
  */
  var point_of_interest = ee.Geometry.Point(long, lat);
  var region = point_of_interest.buffer(4000); // 4000 represents 4km
  
  // ... rest of the code
  
  return "HIGH RISK";
}

const get_flooding_risk = (long, lat) => {
  return "HIGH RISK";
}
