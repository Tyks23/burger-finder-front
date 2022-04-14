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
        //https://pacific-plains-35782.herokuapp.com/getburgervenues?location=${location}
        const {data} = await axios.get(`http://localhost:8080/getburgervenues?location=${location}`).catch(function (error) {
          if (error.response) {
            setIsBroken(true);
            setErrorCode(error.response.status);
          }
        })
        setIsLoading(false)
        setBurgerVenues(data)
      }} disabled={isLoading || location.length < 2}>Search</button>  
      {isBroken ? "Something Broke: "+errorCode: ""}
      <div className='container'>
      {isLoading ? <LoadingSpinner /> : burgerVenues.map(({ fsq_id, name, picture }) => <BurgerDisplayComponent key={fsq_id} name={name} imgUrl={picture} />, [])}
      </div>
    </>
  );
}

export default App;
