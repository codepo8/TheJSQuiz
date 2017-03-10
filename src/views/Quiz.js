import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import Highlight from 'react-highlight.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Custom components
import Header from '../components/Header';
import MessageBox from '../components/MessageBox';

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
        };

        this.redirectAfterQuizEnded();
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
                        {currentQuestion.snippet && <Highlight className='js noselect'>{currentQuestion.snippet}</Highlight>}
                        <ul className="mdl-list">
                            {currentQuestion.answers.map((answer, key) => <li key={key} className="mdl-list__item" onClick={item => this.answerQuestion(answer)}>
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
        const store = this.store;

        return (
            <main className="mdl-layout__content quiz-component">
                <div className="page-content">
                    <Header/>
                    <div className="container">
                        <div className="row">
                            <h5 className="animate">Question {store.currentQuestionIndex + 1} / {store.questions.length}</h5>

                            <h5 className="animate">Difficulty: {store.difficulty}</h5>
                        </div>

                        <ul>
                            <ReactCSSTransitionGroup transitionName="animate" transitionEnterTimeout={500} transitionLeaveTimeout={300} transitionAppear={true} transitionAppearTimeout={500}>
                                {this.renderQuestions()}
                            </ReactCSSTransitionGroup>
                        </ul>
                    </div>
                </div>

                {/* <MessageBox title="Correct!" message="Well done, onto the next one." color="green" /> */}

                {this.store.quizEnded}
            </main>
        );
    }
}
