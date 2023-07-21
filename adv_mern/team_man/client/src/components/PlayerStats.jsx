import React from 'react';
import { Link } from 'react-router-dom';

const PlayerStats = (props) => {
    const { gameNum, players } = props;
    return (
        <div>
            <p><Link to={'/'}>Manage Players</Link> | <Link>Manage Player Status</Link></p>
            <div>
                <h1>Player Stats - {gameNum}</h1>
                <div>
                    <h3><Link to={'/status/game/1'}>Game 1</Link> | <Link to={'/status/game/2'}>Game 2</Link> | <Link to={'/status/game/3'}>Game 3</Link></h3>
                </div>
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
                                    {/* put in conditional rendering statements to change button color */}
                                    <td value={player.gameOneStat}><p><button>Playing</button> | <button>Not Playing</button> | <button>Undecided</button></p></td>
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