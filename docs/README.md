# SLAM

System for Land Assets under Management

## Key Architectural Decisions

| Decision                  | Rationale                                                                                                                                                                                                                         |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Firebase DB]()           | Easy integration, low cost if number of users will remain low, highly integrated platform ideal for a proof of concept. Issue: Unlike PostGIS, data validation has to be done on the server side, other NoSQL pros and cons apply |
| [Google Earth Engine]()   | Ease of integration, contains enough functionality for what we need. Issue: What is the amount of traffic they allow per user? Might be the **key risk** here                                                                     |
| [Javascript and Nodejs]() | Fast, easy, native GEE API, popular language                                                                                                                                                                                      |
| 2 tier architecture       | Cache centered strategy, low cost, low latency, very flexible, well understood strategy                                                                                                                                           |
