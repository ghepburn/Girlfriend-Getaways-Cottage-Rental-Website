import React, {Component} from "react";

class SingleActionButton extends Component {

	state = {
		buttonOn: false,
		buttonText: ""
	}

	componentDidMount() {
		this.setState({buttonText: this.props.offButtonText});
	}

	handleClick = () => {
		if (this.state.buttonOn) {
			this.setState({buttonOn: !this.state.buttonOn});
		} else {
			this.setState({buttonText: this.props.onButtonText, buttonOn: !this.state.buttonOn});
		}
		this.props.onClick();
	}
	
	render() {
		return(
			<button onClick={this.handleClick}>
				{this.state.buttonText}
			</button>
		);
	}
}

export default SingleActionButton;