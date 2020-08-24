import React, { Component } from "react";

class Member extends Component{

	render() {
		return (
			<tr>
				<td>{this.props.member.firstName}</td>
				<td>{this.props.member.lastName}</td>
				<td>{this.props.member.email}</td>
			</tr>
		)
	}
}


export default Member;