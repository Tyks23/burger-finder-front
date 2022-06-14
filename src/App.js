import { useState, useRef } from 'react'
import axios from 'axios'
import LoadingSpinner from './components/spinner';
import BurgerDisplayComponent from "./components/BurgerDisplayComponent";


function App() {
  const location = useRef(0)
  const [burgerVenues, setBurgerVenues] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isBroken, setIsBroken] = useState(false)
  const [errorCode, setErrorCode] = useState('');

  return (
    <>
      <h1>Welcome to the Burger Finder</h1>
      <p>Your chosen location is:</p>
      <input type="text" className='burgerInput' placeholder="Tartu, Tallinn, Tokyo etc.." value={location.value} onChange={(value) => {location.current=value.target.value}} />
      <button onClick={async () => {
        setIsBroken(false);
        setIsLoading(true)
        await axios.get(`http://localhost:8080/api/burger/getvenues?location=${location.current}`)
        .then(function (response){
        setBurgerVenues(response.data.venueList);

        })
        .catch(function (error) {
          if (error.response) {
            setIsBroken(true);
            setErrorCode(error.response.status);
            if(error.response.status === 400){
              setErrorCode("No burger venues in this location");
            }
          }
        })
        setIsLoading(false);
        console.log(location.current.length)
      }} disabled={isLoading}>Search</button>  
      {isBroken ? "Something Broke: "+errorCode: ""}

      <div className='container'>
        {isLoading ? <LoadingSpinner/> : burgerVenues.map(({ fsq_id, name }) => <BurgerDisplayComponent key={fsq_id} fsq_id={fsq_id} name={name} />, [])}
      </div>
    </>
  );
}

export default App;
