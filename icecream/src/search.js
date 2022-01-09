import React, { useEffect, useState } from "react";


const APIkey = "f757xwkJ68TIXrXDLH2U0dAjh79rIzWVmJg5iLNnmk9lCOaefU0eMusllNNG_5gdvFwEKe5blDP-tw5KcjecPtzljiRCP7ZVBh_MK35CnfubxvaLtFW_tPcbE0vbYXYx"
const yelpAPI = "https://api.yelp.com/v3/businesses/search?term=icecream&total=10"


function Search() {

const [error, setError] = useState(null);
const[isLoaded, setIsLoaded] = useState(false);
const[items, setItems] = useState([]);



useEffect(() => {
    fetch(yelpAPI)
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