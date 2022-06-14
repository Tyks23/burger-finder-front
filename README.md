# Burger Finder webapp
 

The Burger Finder is a webapp that enables the user to displays burger related venues in a specific area. The webapp uses APIs from FourSquare to locate venues for burger venues.  

URL:   
Backend Repo: 

## Functionality

The Burger Finder allows the user to input a location and the webapp will return a list of burger joints relating that location.    
The webapp returns the names of burger joints and then most relevant image relating to the venue.  
If the API is unable to detect any burger images relating to the venue, it adds a placeholder image.

## Stack

ReactJS  

Express

## Dev environment



### React frontend
-requires NodeJs to be installed

1) navigate to the directory in your chosen cli that supports node
2) npm install
3) npm start

React dev server should be running on localhost:3000

### Express backend




## API endpoints

URL for API: https://pacific-plains-35782.herokuapp.com  
Endpoint: / - default endpoint, used for checking if API is online  
/getburgervenues?location=Tartu - API call that returns fsq_id, name, picture of the burger joints in a location.
  
## Known issues
 
  Sometimes the API seems to go down and starts returning error code 500 when endpoint is called. I believe this is due to some restriction from Heroku. It may also be that my API is unstable in the Heroku environment. The only fix for this is to wait awhile for the backend to regain function independently.
  
  
## Out of scope improvements
  
  1) Asynchronicity to run API calls on multiple threads for a faster process
  2) More precise exception/error handling 
  3) Adding further functionality to the burger finder e.g customizable paramaters for queries.
    

