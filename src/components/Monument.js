import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Monument extends Component {
	static propTypes = {
		id: PropTypes.string,
		details: PropTypes.shape({
			ARTWORKNAM: PropTypes.string,
			ARTIST: PropTypes.string,
			ADDRESS: PropTypes.string,
			POSTAL: PropTypes.string
		})
	};
	render() {
		const { id, ARTWORKNAM, ARTIST, ADD_FULL, POSTAL } = this.props.details;
		return (
			<li>
				<h4>
					{ARTWORKNAM} - {ARTIST}
				</h4>
				<p>
					{ADD_FULL}
				</p>
				<button />
			</li>
		);
	}
}

export default Monument;
