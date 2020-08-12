import React, {Component} from "react";

class DualActionButton extends Component {

	state = {
		buttonOn: false,
		buttonText: ""
	}

	componentDidMount() {
		this.setState({
			buttonText: this.props.offButtonText
		});
	}

	handleClick = () => {
		if (this.state.buttonOn) {
				this.props.offClick();
				this.setState({buttonOn: !this.state.buttonOn, buttonText: this.props.offButtonText});
			} else {
				this.props.onClick()
				this.setState({buttonOn: !this.state.buttonOn, buttonText: this.props.onButtonText})
			}		
	}
	
	render() {
		return(
			<button onClick={this.handleClick} >
				{this.state.buttonText}
			</button>
		);
	}
}

export default DualActionButton;