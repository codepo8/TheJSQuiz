import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {Link} from 'react-router-dom';

@inject("store")@observer
export default class Card extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
        this.setQuizDifficulty = this.setQuizDifficulty.bind(this);
    }

    setQuizDifficulty() {
        this.store.setQuizDifficulty(this.props.difficulty);
    }

    render() {
        return (
            <div className="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp" onClick={() => this.setQuizDifficulty()}>
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">{this.props.title}</h4>
                </div>
                <div className="mdl-card__supporting-text">
                    <span className="mdl-typography--font-light mdl-typography--subhead">{this.props.description}</span>
                </div>
                <Link to="/quiz">
                    <div className="mdl-card__actions">
                        <div className="android-link mdl-button mdl-js-button mdl-typography--text-uppercase" href data-upgraded=",MaterialButton">
                            Start the quiz
                            <i className="material-icons">chevron_right</i>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}
