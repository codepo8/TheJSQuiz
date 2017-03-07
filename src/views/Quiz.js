import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import Highlight from 'react-highlight.js';

// Custom components
import Header from '../components/Header';

@inject("store")@observer
export default class Quiz extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
        this.renderQuestions = this.renderQuestions.bind(this);
        this.answerQuestion = this.answerQuestion.bind(this);
    }

    componentWillMount() {
        // If difficulty has not been set redirect to Home
        if (this.store.difficulty === undefined) {
            this.props.history.push('/');
        }

        this.redirectAfterQuizEnded();
    }

    renderQuestions() {
        if (this.store.questions && this.store.questions.length > 0) {
            let currentQuestion = this.store.questions[this.store.currentQuestionIndex];
            if (currentQuestion) {
                return (
                    <div className="question">
                      <h4>{currentQuestion.title}</h4> <br/>
                        {currentQuestion.answers.map((answer, key) =>
                          <li key={key}
                              onClick={() => this.answerQuestion(answer)}>{answer.value}</li>
                        )}
                    </div>
                )
            }
        }
    }

    answerQuestion(answer) {
        this.redirectAfterQuizEnded();
        this.store.answerQuestion(answer);
    }

    redirectAfterQuizEnded() {
        if(this.store.quizEnded === true) {
            this.props.history.push('/results');
        }
    }

    render() {
        return (
            <main className="mdl-layout__content">
                <div className="page-content">
                    <Header/>
                    <div className="container">
                        <h5>difficulty: {this.store.difficulty}</h5>
                        <br/>
                        <ul>{this.renderQuestions()}</ul>
                    </div>
                </div>
            </main>
        );
    }
}
