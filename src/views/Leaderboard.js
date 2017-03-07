import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

// Custom components
import Header from '../components/Header';

@inject("store") @observer
export default class Leaderboard extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    render() {
        return (
            <section className="leaderboard">
                <Header />
                <h1>Advanced Leaderboard</h1>

                <table className="mdl-data-table mdl-js-data-table">
                    <thead>
                    <tr>
                        <th className="mdl-data-table__cell--non-numeric">Name</th>
                        <th className="mdl-data-table__cell--non-numeric">Score</th>
                        <th className="mdl-data-table__cell--non-numeric">GitHub Profile</th>
                        <th className="mdl-data-table__cell--non-numeric">Difficulty</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="mdl-data-table__cell--non-numeric">John Does</td>
                        <td className="mdl-data-table__cell--non-numeric">48</td>
                        <td className="mdl-data-table__cell--non-numeric">View @name on GitHub</td>
                        <td className="mdl-data-table__cell--non-numeric">Advanced</td>
                    </tr>

                    <tr>
                        <td className="mdl-data-table__cell--non-numeric">John Tester</td>
                        <td className="mdl-data-table__cell--non-numeric">59</td>
                        <td className="mdl-data-table__cell--non-numeric">View @name on GitHub</td>
                        <td className="mdl-data-table__cell--non-numeric">Advanced</td>
                    </tr>

                    <tr>
                        <td className="mdl-data-table__cell--non-numeric">John Does</td>
                        <td className="mdl-data-table__cell--non-numeric">48</td>
                        <td className="mdl-data-table__cell--non-numeric">View @name on GitHub</td>
                        <td className="mdl-data-table__cell--non-numeric">Advanced</td>
                    </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
