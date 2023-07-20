import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlayerList from '../components/PlayerList';

const Main = () => {
    const [ players, setPlayers ] = useState([]);
    const removeFromDom = (playerID) => {
        setPlayers(players.filter(player => player._id != playerID))
    };
    const deletePlayer = (playerID) => {
        axios.delete('http://localhost:8000/api/players/' + playerID)
            .then((res) => {
                removeFromDom(playerID);
            })
            .catch((err) => console.log('Unable to process DELETE request'));
    };
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
            <PlayerList players={players} btnProp={deletePlayer} />
        </div>
    )
}

export default Main;