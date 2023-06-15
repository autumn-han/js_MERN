import React, {useState, useEffect} from 'react';

const CatchEmAll = (props) => {
    const [pokemon, setPokemon] = useState([]);
    useEffect( () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => response.json())
            .then(response => setPokemon(response.results))
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