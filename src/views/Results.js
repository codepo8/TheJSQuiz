import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import { Link } from 'react-router-dom';

// Custom components
import Header from '../components/Header';

@inject("store") @observer
export default class Leaderboard extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
        this.state = { score: (this.store.questions.length * 4) - this.store.incorrectAnswerCount }
    }

    componentWillMount() {
        // If difficulty has not been set redirect to Home
        if (this.store.difficulty === undefined || this.store.quizEnded === false) {
            this.props.history.push('/');
        }
    }

    componentWillUnmount() {
        this.store.resetQuiz();
    }

    render() {
        return (
            <section className="home">
                <Header/>
                <div className="container">
                    <h1>Results</h1>
                    <h4>Well done for completing the {this.store.difficulty} JavaScript quiz! Your results are
                        below.</h4>
                    <p>
                        <strong>Correct Answers:</strong> {this.store.correctAnswerCount}
                    </p>

                    <p>
                        <strong>Incorrect Answers:</strong> {this.store.incorrectAnswerCount}
                    </p>

                    <h5>Your score is: {this.state.score} out of {this.store.questions.length * 4}!</h5>

                    <br/>

                    <Link to="/" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Back to Home</Link>
                </div>
            </section>
        );
    }
}
