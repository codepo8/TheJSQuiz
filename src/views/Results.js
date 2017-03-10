import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

// Custom components
import Header from '../components/Header';

@inject("store")@observer
export default class Leaderboard extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    componentWillMount() {
        // If difficulty has not been set redirect to Home
        if (this.store.difficulty === undefined || this.store.quizEnded === false) {
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <section className="home">
              <Header/>
                <div className="container">
                    <h1>Results</h1>
                    <p>
                        Correct: {this.store.correctAnswerCount}
                    </p>

                    <p>
                        Incorrect: {this.store.incorrectAnswerCount}
                    </p>
                </div>
            </section>
        );
    }
}
