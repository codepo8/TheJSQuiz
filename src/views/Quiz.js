import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import Highlight from 'react-highlight.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Custom components
import Header from '../components/Header';
import MessageBox from '../components/MessageBox';

@inject("store") @observer
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

    componentDidUpdate() {
        this.redirectAfterQuizEnded();
    }

    answerQuestion(question, e) {
        const answer = this.store.answerQuestion(question);

        if (answer === false) {
            e.currentTarget.style.backgroundColor = '#ccc';
            e.currentTarget.style.pointerEvents = 'none';
        }
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
                        {currentQuestion.snippet && <Highlight className='js noselect'>{currentQuestion.snippet}</Highlight>}
                        <ul className="mdl-list">
                            {currentQuestion.answers.map((question, key) => <li key={key} className="mdl-list__item">
                                {questionPrefixes[key]}
                                <span className="answer" onClick={e => this.answerQuestion(question, e)}>{question.answer}</span>
                            </li>)}
                        </ul>
                    </div>
                )
            }
        }
    }

    render() {
        const store = this.store;

        return (
            <main className="mdl-layout__content quiz-component">
                <div className="page-content">
                    <Header/>

                    {this.store.questions.length > 0 && <div className="container">
                        <div className="row">
                            <h5 className="animate">Question {store.currentQuestionIndex + 1}
                                /{store.questions.length}</h5>

                            <h5 className="animate">Difficulty: {store.difficulty}</h5>
                        </div>

                        <ul>
                            <ReactCSSTransitionGroup transitionName="animate" transitionEnterTimeout={500} transitionLeaveTimeout={300} transitionAppear={true} transitionAppearTimeout={500}>
                                {this.renderQuestions()}
                            </ReactCSSTransitionGroup>
                        </ul>
                    </div>}
                </div>

                {store.correctNotification && <MessageBox title="Correct!" color="green" character="&#x2714;"/>}
                {store.incorrectNotification && <MessageBox title="Wrong Answer!" color="red" character="&#x2716;"/>}
                {this.store.quizEnded}
            </main>
        );
    }
}
