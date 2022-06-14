# Burger Finder webapp
 

The Burger Finder is a webapp that enables the user to displays burger related venues in a specific area. The webapp uses APIs from FourSquare to locate venues for burger venues. 

**Hosted on free service so initial boot might take awhile**

URL: https://burger-finder-webapp.herokuapp.com/
Backend Repo: https://github.com/Tyks23/burger-finder-backend

## Functionality

The Burger Finder allows the user to input a location and the webapp will return a list of burger joints relating that location.    
The webapp returns the names of burger joints and then most relevant image relating to the venue.  
If the API is unable to detect any burger images relating to the venue, it adds a placeholder image.

## Stack
Frontend: 
ReactJS  
Backend: 
Express

## Dev environment

### React frontend
-requires NodeJs to be installed

1) navigate to the directory in your chosen cli that supports node
2) npm install
3) npm start

React dev server should be running on localhost:3000

### Express backend

-requires NodeJs to be installed 

1) navigate to directory in your chosen cli that supports node 
2) npm install
3) cd src 
4) node app.js 

Express dev server should now be running on localhost:8080


## API endpoints

URL for API: https://burger-finder-backend.herokuapp.com
Endpoint:  
 GET /api/burger/getvenues?location=<location> -  find burger venues in a location  
 POST /api/burger/getvenueimages - find image representing burger venue  



