import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

// Custom components
import Header from '../components/Header';
import LeaderboardTable from '../components/LeaderboardTable';

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

                <div className="container animate">
                    <LeaderboardTable />
                </div>
            </section>
        );
    }
}
