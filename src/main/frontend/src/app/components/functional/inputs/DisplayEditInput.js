import React, {Componenet} from "react";
import Button from "../Button";

class DisplayEditInput extends Componenet {

	constructor(props) {
		super(props);
		this.state = {
			editData: false
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({editData: !this.state.editData});
	}

	handleChange(e) {
		this.props.handleChange();
	}

	render(){

		const display = this.state.editData ? <input name={this.props.name} onChange={this.onChange} defaultValue={this.props.defaultValue} /> : <div>{this.props.data}</div>; 

		return(

			<React.Fragment>
				<td>{display}</td>
				<td><Button onClick={this.handleClick} onButtonText="Apply" offButtonText="Edit" /></td>
			</React.Fragment>
		);
	}

}

export default CommonInput