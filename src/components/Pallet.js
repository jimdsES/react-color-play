import React from 'react';
import Color from './Color';
class Pallet extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			colors : [
				{ name: 'Protoss Pylon', color: '#00a8ff' },
				{ name: 'Pico Void', color: '#192a56' },
				{ name: 'Pink Glamour', color: '#ff7979' },
				{ name: 'Deep Koamary', color: '#30336b' },
				{ name: 'GreenLand Green', color: '#22a6b3' }
			]
		};
	}

	render() {
		return (
			<div style={pallet_container}>
				{this.state.colors.map((color) => {
					return <Color key={color.name} colorPropertie={color.color} handleClick={this.props.handleClick} />;
				})}
			</div>
		);
	}
}
const pallet_container = {
	position        : 'relative',
	top             : '90%',
	left            : '50%',
	width           : '30%',
	padding         : '5px',
	height          : 'auto',
	borderRadius    : '25px',
	backgroundColor : '#f7f1e3',
	transform       : 'translate(-50%,-50%)'
};

export default Pallet;
