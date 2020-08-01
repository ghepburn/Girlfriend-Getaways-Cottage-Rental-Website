import React, {Component} from "react";

class OneClickButton extends Component {

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
		this.setState({
			buttonOn: true, buttonText: this.state.onButtonText
		});
		this.props.onClick()
	}
	
	render() {
		return(
			<button onClick={this.handleClick}>
				{this.state.buttonText}
			</button>
		);
	}
}

export default OneClickButton