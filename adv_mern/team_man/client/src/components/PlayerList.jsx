import React from 'react';
import { Link } from 'react-router-dom';

const PlayerList = (props) => {
    const { players, btnProp } = props;
    return (
        <div>
            <p><Link to={'/'}>Manage Players</Link> | <Link to={'/status/game/1'}>Manage Player Status</Link></p>
            <div>
                <p><Link to={'/players/addplayer'}>Add Player</Link></p>
                <table>
                    <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>Preferred Position</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player, index) => {
                            return (
                                <tr key={index}>
                                    <td>{player.name}</td>
                                    <td>{player.position}</td>
                                    <td><button onClick={() => btnProp(player._id)}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default PlayerList;