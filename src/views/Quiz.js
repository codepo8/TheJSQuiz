import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import Highlight from 'react-highlight.js';

// Custom components
import Header from '../components/Header';
import Card from '../components/Card';

@inject("store")@observer
export default class Quiz extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    componentWillMount() {
        // If difficulty has not been set redirect to Home
        if (this.store.difficulty === undefined) {
            this.props.replace("/");
        }
    }

    componentDidMount() {
        console.log(this.store.questions);
    }

    render() {
        return (
            <main className="mdl-layout__content">
                <div className="page-content">
                    <Header/>
                    <div className="container">
                        <div className="android-card-container mdl-grid">
                            <h1>difficulty: {this.store.difficulty}</h1>
                            <Highlight language="js">
                                var a = 5;
                            </Highlight>

                            {this.store.questions && this.store.questions.length > 0 && this.store.questions.map((question, index) => {
                                return (
                                    <div key={index}>
                                        <h1>Question: {question.title}</h1>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
