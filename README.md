# Burger Finder webapp

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Stack

ReactJS  
-axios

Java Spring  
-okhttp3  
-gson

## Dev environment

### React frontend
-requires NodeJs to be installed

1) navigate to burgerfinderfront2 directory in your chosen cli that supports node
2) npm install
3) npm start

React dev server should be running on localhost:3000

### Java backend
-requires JRE to be installed

#### Intellj
1) open BurgerFinder directory in Intellij
2) run BurgerFinder\BurgerFinder\src\main\java\com\burger\burgerbackend.java

Java backend server should be running at localhost:8080

## API endpoints

URL for API: https://pacific-plains-35782.herokuapp.com  
Endpoint: /getburgervenues?location=<location>
  
## Known issues
 
  Sometimes the API seems to go down and starts returning error code 500 when endpoint is called. I believe this is due to some restriction from Heroku.
  
## Out of scope improvements
  
  1) Asynchronicity to run API calls on multiple threads for a faster process
  2) More precise exception/error handling 
    

