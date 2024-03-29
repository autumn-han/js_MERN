import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlayerStats from '../components/PlayerStats';

const GameOneStats = () => {
    const [ players, setPlayers ] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then((res) => {
            console.log(res.data);
            setPlayers(res.data);
        })
        .catch((err) => console.log('Unable to process GET request'));
    });
    const updateStatus = (playerID) => {
        axios.put('http://localhost:8000/api/players/' + playerID)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.log('Unable to process PATCH request'));
    };
    return (
        <div>
            <PlayerStats gameNum='Game 1' players={players} />
        </div>
    );
};

export default GameOneStats;