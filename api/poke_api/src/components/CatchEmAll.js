import React, {useState, useEffect} from 'react';
import axios from 'axios';


const CatchEmAll = () => {
    const [pokemon, setPokemon] = useState([]);
    useEffect( () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => {setPokemon(response.data.results)})
            .catch(err => {
                console.log(err)})
        console.log(pokemon)
    }, []);
    return (
        <div>
            {pokemon.map( (pokemon, index) => {
                return (
                    <li key={index}>{pokemon.name}</li>
                )
            }
            )}
        </div>
    )
}

export default CatchEmAll;