import React, {Component} from "react";

class OneClickDualActionButton extends Component {

	constructor(props) {
		super(props);
		this.state={
			buttonOn: false,
			onButtonText: "",
			offButtonText: "",
			buttonText: ""
		}	

		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		this.setState({
			onButtonText: this.props.onButtonText, offButtonText: this.props.offButtonText, buttonText: this.props.offButtonText
		});
	}

	handleClick() {
		if (this.state.buttonOn) {
			this.props.offClick()	
		} else {
			this.props.onClick()
		}
		this.setState({
			buttonOn: true, buttonText: this.state.onButtonText
		});
	}
	
	render() {

		return(
			<button onClick={this.handleClick} >
				{this.state.buttonText}
			</button>
		);
	}
}

export default OneClickDualActionButton