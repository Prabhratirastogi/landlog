# SLAM
System for Land Assets under Management

## Subprojects
| Project | Purpose | Description |
| --- | --- | --- |
| [serve](https://github.com/TechnocultureResearch/SLAM/tree/dev/serve) | Serverless GIS Algortihms | Contains an `npm` project which can be deployed in as a serverless function to calculate geographic paramters for new co-ordinates in the database or stale values of existing entries |
| [compute](https://github.com/TechnocultureResearch/SLAM/tree/dev/compute) | REST Server | REST API to serve the data from the NoSQL database for CREATE, READ, UPDATE and DELETE operations by the end user. Most likely a Nodejs/Express Server |
| [webapp](https://github.com/TechnocultureResearch/SLAM/tree/dev/webapp) | Web App | Unclear, this will be done in whichever manner is the most convinient: Vanilla HTML/JS, React Webapp, Flutter Mobile? |

## Architecture Diagram
![LandDB@2x-2](https://user-images.githubusercontent.com/33483920/135498987-aee9e32d-43a4-420b-84c1-571189163906.png)
