import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PlayerForm from '../components/PlayerForm';

const NewPlayer = () => {
    const [ players, setPlayers ] = useState([]);
    const navigate = useNavigate();
    const createPlayer = (playerParam) => {
        axios.post('http://localhost:8000/api/players', playerParam)
        .then((res) => {
            console.log(res.data);
            setPlayers([...players, res.data]);
            navigate('/');
        })
        .catch((err) => console.log('Unable to process POST request'));
    };
    return (
        <div>
            <PlayerForm onSubmitProp={createPlayer} />
        </div>
    );
};

export default NewPlayer;