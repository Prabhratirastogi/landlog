# SLAM
System for Land Assets under Management

## Subprojects
| Project | Purpose | Description |
| --- | --- | --- |
| [compute](https://github.com/TechnocultureResearch/SLAM/tree/dev/compute) | Serverless GIS Algortihms | Contains an `npm` project which can be deployed in as a serverless function to calculate geographic paramters for new co-ordinates in the database or stale values of existing entries |
| serve | REST Server | REST API to serve the data from the NoSQL database for `CREATE`, `READ`, `UPDATE` and `DELETE` operations by the end user. Most likely a Nodejs/Express Server. May not be needed with Firebase. |
| [webapp](https://github.com/TechnocultureResearch/SLAM/tree/dev/webapp) | Web App | Unclear, this will be done in whichever manner is the most convinient: Vanilla HTML/JS, React Webapp, Flutter Mobile? |

## Architecture Diagram
![LandDB](https://user-images.githubusercontent.com/33483920/135711416-5e4b013f-e331-46e8-b44f-a1e93cdb0f8a.png)
