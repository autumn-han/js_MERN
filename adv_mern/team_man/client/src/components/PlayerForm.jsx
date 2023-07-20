import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PlayerForm = (props) => {
    const { onSubmitProp } = props;
    const [ name, setName ] = useState("");
    const [ position, setPosition ] = useState("");
    const onSubmitHandler =(e) => {
        e.preventDefault();
        onSubmitProp({ name, position });
    };
    return (
        <div>
            <p><Link to={'/'}>Manage Players</Link> | <Link>Manage Player Status</Link></p>
            <div>
                <p><Link to={'/'}>List</Link></p>
                <div>
                    <h3>Add Player</h3>
                    <form onSubmit={onSubmitHandler}>
                        <div>
                            <label>Player Name: </label>
                            <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div>
                            <label>Preferred Position: </label>
                            <input type='text' value={position} onChange={(e) => setPosition(e.target.value)}/>
                        </div>
                        <button>Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlayerForm;