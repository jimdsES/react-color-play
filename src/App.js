import React from 'react';
import './App.css';
import Pallet from './components/Pallet';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color : '#22a6b3'
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(color) {
		this.setState({ color: color });
	}
	render() {
		const app_background = {
			background : this.state.color,
			width      : '100vw',
			height     : '100vh',
			position   : 'absolute'
		};
		return (
			<div style={app_background}>
				<Pallet handleClick={this.handleClick} />
			</div>
		);
	}
}

export default App;
