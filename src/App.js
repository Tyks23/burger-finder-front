import { useState } from 'react'
import axios from 'axios'
import LoadingSpinner from './components/spinner';
import BurgerDisplayComponent from "./components/BurgerDisplayComponent";


function App() {
  const [location, setLocation] = useState('')
  const [burgerVenues, setBurgerVenues] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isBroken, setIsBroken] = useState(false)
  const [errorCode, setErrorCode] = useState('');

  return (
    <>
      <h1>Welcome to the Burger Finder</h1>
      <p>Your chosen location is:</p>
      <input type="text" className='burgerInput' placeholder="Tartu, Tallinn, Tokyo etc.." value={location} onChange={({ target: { value } }) => { setLocation(value) }} />
      <button onClick={async () => {
        setIsLoading(true)
        await axios.get(`http://localhost:8080/api/burger/getvenues?location=${location}`)
        .then(function (response){
        setBurgerVenues(response.data.venueList);
        })
        .catch(function (error) {
          if (error.response) {
            setIsBroken(true);
            setErrorCode(error.response.status);
          }
        })
        setIsLoading(false)
      }} disabled={isLoading || location.length < 2}>Search</button>  
      {isBroken ? "Something Broke: "+errorCode: ""}
      <div className='container'>
      {burgerVenues.map(({ fsq_id, name }) => <BurgerDisplayComponent key={fsq_id} fsq_id={fsq_id} name={name} />, [])}
      </div>
    </>
  );
}

export default App;
