import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider, observer } from 'mobx-react';
import LazyRoute from 'lazy-route';

@observer
export default class App extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store
	}

	render() {
		const { timeToRefresh } = this.store;
		return (
			<Router>
				<Provider store={this.store}>
					<div className="mdl-layout mdl-js-layout">
						{/*<DevTools />*/}
						<Route exact
							   path="/"
							   render={(props) => <LazyRoute {...props} component={System.import('./views/Home')} />}
						/>

						<Route exact
								 path="/quiz/"
								 render={(props) => <LazyRoute {...props} component={System.import('./views/Quiz')} />}
						/>

						<Route exact
							   path="/results"
							   render={(props) => <LazyRoute {...props} component={System.import('./views/Results')} />}
						/>

						<Route exact
							   path="/leaderboard"
							   render={(props) => <LazyRoute {...props} component={System.import('./views/Leaderboard')} />}
						/>

						{!!(timeToRefresh && timeToRefresh <= 4) && this.store.refreshToken()}
					</div>
				</Provider>
			</Router>
		)
	}
}
