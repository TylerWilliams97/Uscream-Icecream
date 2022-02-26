import React, { useEffect, useState } from "react";


const APIkey = "RSt_Dgt6TDPonLszaQ-bJ_OF6LdX-QPwWHJBqjHH_Cgw_B4V7d26cwIwCdbUtjCaEJVd02527I8KSSh7E1C65ShDiG67tM4P4dlGqvk0iB4pZoZtSnzW4t9h7XMZYnYx-tw5KcjecPtzljiRCP7ZVBh_MK35CnfubxvaLtFW_tPcbE0vbYXYx"
const yelpAPI = "https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972"
const axios = require('axios').default; 

function Search() {

const [error, setError] = useState(null);
const[isLoaded, setIsLoaded] = useState(false);
const[items, setItems] = useState([]);



useEffect(() => {
    axios.get(yelpAPI, {headers:{'Authorization':`Bearer ${APIkey}`}}
  
    )
    .then(res => res.json())
    .then(
        (result) => {
            setIsLoaded(true);
            setItems(result);
            console.log(result)
        },
        //errror handling
        (error) => {
            setIsLoaded(true);
            setError(error);
            console.log(error)
        }
    )
}, [])
    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>...Loading</div>
    } else{
        return (
            <ul>
                Yelp Worked!
                {items}
            </ul>
        )
    }






}
export default Search;