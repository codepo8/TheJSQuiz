import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {Link} from 'react-router-dom';

@inject("store") @observer
export default class Card extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
        this.state = {
            leaderboard: [],
            difficulty: 'advanced'
        };
        this.changeDifficulty = this.changeDifficulty.bind(this);
        this.displayTableRows = this.displayTableRows.bind(this);
    }

    componentDidMount() {
        this.changeDifficulty({target: {value: 'advanced'}})
    }

    changeDifficulty(e) {
        this.setState({difficulty: e.target.value});
        const getLeaderboard = this.store.getLeaderboard(e.target.value);
        getLeaderboard.then(leaderboard => this.setState({leaderboard}));
    }

    displayTableRows() {
        if (this.state.leaderboard && this.state.leaderboard.length > 0) {

            return this.state.leaderboard.map((user, key) =>
                <tr key={key}>
                    <td className="mdl-data-table__cell--non-numeric">{key + 1}</td>

                    <td className="mdl-data-table__cell--non-numeric">{user.display_name}</td>

                    <td className="mdl-data-table__cell--non-numeric">{user.score}</td>

                    <td className="mdl-data-table__cell--non-numeric">
                        <Link to={user.github_link}>{user.github_link}</Link>
                    </td>

                    <td className="mdl-data-table__cell--non-numeric">{user.difficulty}</td>
                </tr>
            )
        }
    }

    render() {
        return (
            <div className="leaderboard-table">

                <h4>Select difficulty</h4>

                <select value={this.state.difficulty} onChange={(e) => this.changeDifficulty(e)}>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>

                <h1>{this.state.difficulty} Leaderboard</h1>

                <table className="mdl-data-table mdl-js-data-table">
                    <thead>
                    <tr>
                        <th className="mdl-data-table__cell--non-numeric">Position</th>
                        <th className="mdl-data-table__cell--non-numeric">Name</th>
                        <th className="mdl-data-table__cell--non-numeric">Score</th>
                        <th className="mdl-data-table__cell--non-numeric">GitHub Profile</th>
                        <th className="mdl-data-table__cell--non-numeric">Difficulty</th>
                    </tr>
                    </thead>

                    <tbody>
                        {this.displayTableRows()}
                    </tbody>
                </table>
            </div>
        );
    }
}
