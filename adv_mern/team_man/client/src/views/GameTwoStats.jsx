import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlayerStats from '../components/PlayerStats';

const GameTwoStats = () => {
    const [ players, setPlayers ] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then((res) => {
            console.log(res.data);
            setPlayers(res.data);
        })
        .catch((err) => console.log('Unable to process GET request'));
    });
    return (
        <div>
            <PlayerStats gameNum='Game 2' players={players} />
        </div>
    );
};

export default GameTwoStats;