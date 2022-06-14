import axios from "axios";
import { useState } from "react";

export default function BurgerDisplayComponent({ fsq_id, name }) {

  const [imgUrl, setImgUrl] = useState('');

  axios.post('http://localhost:8080/api/burger/getvenueimages', {
    fsq_id: fsq_id
  })
    .then(function (response) {
      setImgUrl(response.data)
      //console.log(response);
    })
    .catch(function (error) {
      //console.log(error);
    });


  return <div className="burgerContainer">
    <div className="burgerContainerText">
      <h1 style={name.length > 11 ? { fontSize: 'large' } : {}}>{name}</h1>
    </div>
    <div className="burgerContainerImage">
      <img src={imgUrl} alt="Image of a burger" />
    </div>
  </div>
}

