import React from 'react';
import { Link } from 'react-router-dom';

const PlayerList = (props) => {
    const { players } = props;
    return (
        <div>
            <p><Link>Manage Players</Link> | <Link>Manage Player Status</Link></p>
            <div>
                <p><Link>List</Link> | <Link>Add Player</Link></p>
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
                                    <td>{player.playerName}</td>
                                    <td>{player.prefPost}</td>
                                    <td><button>Delete</button></td>
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