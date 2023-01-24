# LandSpec
This is an API - wraps various other APIs for the purposes of Land Analysis.

## Build

```sh
> make install # Must be run atleast once to setup the virtual environment
> make dev
```

### Dependencies
- Python 3.10
- GNU Make

# Introduction
## Objective
- Interface with LandLog to provide analytics endpoints and workflow endpoints
- Improve analysis of greenfield locations for Real Estate Development in Tier 2, 3, 4, and 5 cities
- Lead generation of new opportunities in terms of lands

## Key Idea
> Essentially a quick rough sketch

### Land Lead Onboarding Workflow
- When a new Land is added -> trigger a set of calculations
### Distances to BagOfIndicators
- Find out distance to utilities using Google Maps API
- Find out distance to a Bag of Income Indicators (Brand Name Stores, Franchises, ATMs, Offices, etc.)
- CONCERN: How best to factor in changes to BagOfIndicators distances upon completion of upcoming Highway/Road/Bridge projects
### Geographical Fitness
- Find out some geographical parameters from Google Earth API (Refer to our prior analysis)
### Greenfield Lead Generation
- Using the rich vector of distances -> Generate Embeddings
- Allow for similarity search over lands (use a Vector Database? Does this work well for JSON blobs?)
### Sparse Price Hints
- Use of web scrapped real estate portal data as sparse price hints
- Use of web scrapped government portal data as sparse price hints
### Track Real Estate Activity
- Use of SerpAPI to track progress new Real Estate Listings
- Use SerpAPI to track new listings in BagOfIndicators category
- Track updates on infrastructure announcements (new factory, new airport, train station, metro, highway, etc)
### Use of Manual Data Collection
- Lead Validation
- Land Onboarding of Real Estate Activity in the city
### Verision and Serve Drone Data
- Interface with Drone Software and migrate data when ready
- Maintain dashboard of Latest Drone Data and Data age

## Key Architectural Concerns
- Database: Plain old JSON store (Firebase?), or something with geoData support (Postgres? Redis?)
- Workflow Management: Temporal? Apache Airflow? AWS Something?
