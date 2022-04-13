import { useState } from 'react'
import axios from 'axios'
import LoadingSpinner from './components/spinner';

import BurgerDisplayComponent from "./components/BurgerDisplayComponent";

//http://localhost:8080/getburgervenues?location=${location}

function App() {
  const [location, setLocation] = useState('')
  const [burgerVenues, setBurgerVenues] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const findBurgur = (location) => {
    setIsLoading(true)
    console.log("should be loading now")
    let data = axios.get(`https://pacific-plains-35782.herokuapp.com/getburgervenues?location=${location}`)
    setIsLoading(false)
    return data;
  }
 

  return (
    <>
      <h1>Welcome to the Burger Finder</h1>
      <p>Your chosen location is:</p>
      <input type="text" className='burgerInput' placeholder="Tartu, Tallinn, Rome etc.." value={location} onChange={({ target: { value } }) => { setLocation(value) }} />
      <button onClick={async () => {
        setIsLoading(true)
        console.log("should be loading now")
        const {data} = await axios.get(`http://localhost:8080/getburgervenues?location=${location}`)
        setIsLoading(false)
        console.log(data)
        setBurgerVenues(data)
      }} disabled={isLoading || location.length < 2}>Search</button>  
      <div className='container'>
      {isLoading ? <LoadingSpinner /> : burgerVenues.map(({ fsq_id, name, picture }) => <BurgerDisplayComponent key={fsq_id} name={name} imgUrl={picture} />, [])}
      </div>
    </>
  );
}

export default App;
