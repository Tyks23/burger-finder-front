import { useState } from 'react'
import axios from 'axios'

import BurgerDisplayComponent from "./components/BurgerDisplayComponent";


const findBurgur = (location) => axios.get(`https://pacific-plains-35782.herokuapp.com/getburgervenues?location=${location}`)
//http://localhost:8080/getburgervenues?location=${location}


function App() {
  const [location, setLocation] = useState('Tartu')
  const [burgerVenues, setBurgerVenues] = useState([])

  return (
    <>
      <h1>Welcome to the Burger Finder</h1>
      <p>Your chosen location is:</p>
      <input type="text" className='burgerInput' value={location} onChange={({ target: { value } }) => { setLocation(value) }} />
      <button value="Serch de matrix" onClick={async () => {
        const { data } = await findBurgur(location);
        console.log(data)
        setBurgerVenues(data)
      }} >Click me daddy UwU</button>
      <div className='container'>
        {burgerVenues.map(({ fsq_id, name, picture }) => <BurgerDisplayComponent key={fsq_id} name={name} imgUrl={picture} />, [])}
      </div>
    </>
  );
}

export default App;
