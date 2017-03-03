import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

// Custom components
import Header from '../components/Header';

@inject("store") @observer
export default class Leaderboard extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    componentWillMount() {
        // If difficulty has not been set redirect to Home
        if (this.store.difficulty === undefined || this.store.quizEnded === false) {
            this.props.replace("/");
        }
    }

    render() {
        return (
            <section className="home">
                <Header />
                <h1>Results</h1>

            </section>
        );
    }
}
