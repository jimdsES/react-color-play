import React from 'react';

class Color extends React.Component {
	constructor(props) {
		super(props);
		this.handleClickColor = this.handleClickColor.bind(this);
	}
	handleClickColor(e) {
		this.props.handleClick(this.props.colorPropertie);
	}
	render() {
		const color_container = {
			visibility   : 'visible',
			display      : 'inline-block',
			background   : this.props.colorPropertie,
			borderRadius : '50%',
			width        : '50px',
			height       : '50px',
			marginLeft   : '20px'
		};

		//onClick={props.handleClick(props.color)}
		return <div style={color_container} onClick={this.handleClickColor} />;
	}
}

export default Color;
