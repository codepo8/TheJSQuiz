import React, {Component} from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = { displayName: '', github: '', message: '' };
    }

    onFormSubmit(e) {
        e.preventDefault();
        const form = e.target;

        if(this.state.github.indexOf('github') < 0) {
           return this.setState({'message': 'Error: Please enter a valid GitHub URL!'});
        }


    }

    render() {
        return (
            <form onSubmit={e => this.onFormSubmit(e)}>
                <h3>Submit your results</h3>
                <p>{this.state.message}</p>

                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input className="mdl-textfield__input" type="text" id="name" required="required" />
                    <label className="mdl-textfield__label" htmlFor="name">Display Name</label>
                </div>

                <br/>

                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input className="mdl-textfield__input" type="text" id="github" required="required" />
                    <label className="mdl-textfield__label" htmlFor="github">GitHub Profile URL</label>
                </div>

                <br/>

                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input className="mdl-textfield__input" type="text" id="score" value={100} readOnly="readOnly" />
                    <label className="mdl-textfield__label" htmlFor="score">Score</label>
                </div>

                <br/>

                <input type="submit" value="Submit Score" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" />
            </form>
        );
    }
}
