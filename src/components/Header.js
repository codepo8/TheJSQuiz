import React from 'react';
import {Link} from 'react-router-dom';

export default() => {
    return (

        <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
                <Link to="/">
                    <span className="mdl-layout-title mdl-navigation__link">The JS Quiz</span>
                </Link>

                <div className="mdl-layout-spacer"/>
                <nav className="mdl-navigation">
                    <Link to="/" className="mdl-navigation__link">HOME</Link>
                    <Link to="/resources" className="mdl-navigation__link">RESOURCES</Link>
                </nav>
            </div>
        </header>
    )
}
