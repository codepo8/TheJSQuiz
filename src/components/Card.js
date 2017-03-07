import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
    return (
        <div className="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">
            <div className="mdl-card__title">
                <h4 className="mdl-card__title-text">{props.title}</h4>
            </div>
            <div className="mdl-card__supporting-text">
                <span className="mdl-typography--font-light mdl-typography--subhead">{props.description}</span>
            </div>
            <Link to={props.link} target="_blank">
                <div className="mdl-card__actions">
                    <div className="android-link mdl-button mdl-js-button mdl-typography--text-uppercase" href
                         data-upgraded=",MaterialButton">
                        View Resource
                        <i className="material-icons">chevron_right</i>
                    </div>
                </div>
            </Link>
        </div>
    );
}
