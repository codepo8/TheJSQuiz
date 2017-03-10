import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import Highlight from 'react-highlight.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
    }

    componentDidUpdate() {
        this.redirectAfterQuizEnded();
    }

    answerQuestion(answer) {
        this.store.answerQuestion(answer);
    }

    redirectAfterQuizEnded() {
        if (this.store.quizEnded === true) {
            this.props.history.push('/results');
        }
    }

    renderQuestions() {

        if (this.store.questions && this.store.questions.length > 0) {
            let currentQuestion = this.store.questions[this.store.currentQuestionIndex];
            let questionPrefixes = ['a.', 'b.', 'c.', 'd.'];

            if (currentQuestion) {
                return (
                    <div className="question" key={this.store.currentQuestionIndex}>
                        <h4>{currentQuestion.title}</h4>
                        <ul className="mdl-list">
                            {currentQuestion.answers.map((answer, key) => <li key={key} className="mdl-list__item" onClick={() => this.answerQuestion(answer)}>
                                {questionPrefixes[key]}
                                <span className="answer">{answer.value}</span>
                            </li>)}
                        </ul>
                    </div>
                )
            }
        }
    }

    render() {
        return (
            <main className="mdl-layout__content quiz-component">
                <div className="page-content">
                    <Header/>
                    <div className="container">
                        <h5 className="animate">Question {this.store.currentQuestionIndex + 1}
                            / {this.store.questions.length}</h5>

                        <h5 className="animate">Difficulty: {this.store.difficulty}</h5>
                        <br/>
                        <ul>
                            <ReactCSSTransitionGroup transitionName="animate" transitionEnterTimeout={500} transitionLeaveTimeout={300}  transitionAppear={true} transitionAppearTimeout={500}>
                                {this.renderQuestions()}
                            </ReactCSSTransitionGroup>
                        </ul>
                    </div>
                </div>

                {this.store.quizEnded}
            </main>
        );
    }
}
