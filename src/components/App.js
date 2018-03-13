import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Header from './Header';
import Monument from './Monument';
import monuments from '../monuments.js';
import '../css/App.css';

class App extends Component {
	state = {
		monuments: {}
	};

	componentDidMount() {
		this.setState({ monuments: monuments });
	}

	static propTypes = {};

	render() {
		return (
			<div className="App">
				<Header tagline="Explore and enjoy the city through art" />
				<div className="monuments">
					{Object.keys(this.state.monuments).map(monument =>
						<Monument
              key={monument}
              id={monument}
              details={this.state.monuments[monument]}
						/>
					)}
				</div>
			</div>
		);
	}
}

export default App;
