import React from 'react';
import { Link } from 'react-router-dom';

const PlayerStats = (props) => {
    const { gameNum, players } = props;
    return (
        <div>
            <p><Link to={'/'}>Manage Players</Link> | <Link>Manage Player Status</Link></p>
            <div>
                <h3>Player Stats - {gameNum}</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player, index) => {
                            return (
                                <tr key={index}>
                                    <td>{player.name}</td>
                                    <td><p><button>Playing</button> | <button>Not Playing</button> | <button>Undecided</button></p></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PlayerStats;