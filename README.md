# Burger Finder webapp
 

The Burger Finder is a webapp that enables the user to displays burger related venues in a specific area. The webapp uses APIs from FourSquare to locate venues and related data and the Qminder Burger API to process that data for fresh burger images.  

URL: https://area-burger-finder.herokuapp.com/  
Backend Repo: https://github.com/Tyks23/burger-finder-back/tree/main

## Functionality

The Burger Finder allows the user to input a location and the webapp will return a list of burger joints relating that location.  
The API is currently set to return a maximum of 15 results to ease up on the server.(Also the current main goal of this webapp is to locate venues in Tartu, which only has 12 venues according to the API)  
The webapp returns the names of burger joints and then most recent image relating to the venue.  
If the API is unable to detect any burger images relating to the venue, it adds a placeholder image.
Each search should take about 10s.

## Stack

ReactJS  
-axios

Java Spring  
-okhttp3  
-gson

## Dev environment

### Emergency setup
**WARNING! This process involves using a personal API key and an unsecured web brower**  
After succesfully running both the frontend and the backend servers, the steps are as follows:  
1) Get an API key from Foursquare by following this guide https://developer.foursquare.com/docs/manage-api-keys
2) Inserting the API key into 'BurgerFinder\src\main\java\api\BurgerController.java' file into the 'apiKey' variable.
3) Re-run the java server(Shift + F10)
4) Open a CORS free chrome browser with the following command in Run: chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
5) navigate to localhost:3000 in the unsecured browser

### React frontend
-requires NodeJs to be installed

1) navigate to the directory in your chosen cli that supports node
2) npm install
3) npm start

React dev server should be running on localhost:3000

### Java backend
Github for backend repo: https://github.com/Tyks23/burger-finder-back/tree/main  
-requires JRE to be installed

#### Intellj
1) open the directory in Intellij
2) run *\src\main\java\com\burger\burgerbackend.java

Java backend server should be running at localhost:8080

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
    

