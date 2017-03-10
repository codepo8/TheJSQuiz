import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

// Custom components
import Header from '../components/Header';
import Form from '../components/Form';

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
                    <h4>Well done for completing the {this.store.difficulty} JavaScript quiz! Your results are below.</h4>
                    <p>
                        <strong>Correct Answers:</strong> {this.store.correctAnswerCount}
                    </p>

                    <p>
                        <strong>Incorrect Answers:</strong> {this.store.incorrectAnswerCount}
                    </p>

                    <h5>Your score is: {((this.store.questions.length * 4) - this.store.incorrectAnswerCount)} out of {this.store.questions.length * 4}!</h5>

                    <br/>

                    <h3>Share your results</h3>
                    <Form />
                </div>
            </section>
        );
    }
}
