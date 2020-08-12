import React, { Component } from "react";

class SingleActionConditionalButton extends Component {

	state = {
		buttonOn: false,
		buttonText: "",
	}

	componentDidMount() {
		this.setState({buttonText: this.props.offButtonText});
	}

	handleClick = () => {
		if (this.state.buttonOn) {
			this.setState({buttonText: this.props.offButtonText});
		} else {
			this.setState({buttonText: this.props.onButtonText});
		}
		this.props.onClick();
	}
	
	render() {

		const button = this.props.disableButton ? <button disabled>{this.state.buttonText}</button> : (<button onClick={this.handleClick}>{this.state.buttonText}</button>);

		return(
			<div>
				{button}
			</div>
		);
	}
}

export default SingleActionConditionalButton;