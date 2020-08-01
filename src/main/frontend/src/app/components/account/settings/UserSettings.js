import React, { Component } from "react";
import UserContext from "../../context/UserContext";
import BasicUserSettings from "./BasicUserSettings";

export class UserSettings extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			houseNumber: "",
			street: "",
			town: "",
			postalCode: "",
			province: "",
			country: ""
		}
	}

	componentDidMount() {
		this.setState({
			firstName: this.props.user.firstName,
			lastName: this.props.user.lastName,
			email: this.props.user.email,
			houseNumber: this.props.user.address.houseNumber,
			street: this.props.user.address.street,
			town: this.props.user.address.town,
			postalCode: this.props.user.address.postalCode,
			province: this.props.user.address.province,
			country: this.props.user.address.country,
		});
	}

	render() {

		return (
			<div>
				<h5>{this.props.user.username}'s Settings</h5>
				<table>
					<body>
						<tr>
							<td>First Name</td>
							<td>{this.state.firstName}</td>
							<td><button>EDIT</button></td>
						</tr>
						<tr>
							<td>Last Name</td>
							<td>{this.state.lastName}</td>
							<td><button>EDIT</button></td>
						</tr>
						<tr>
							<td>Email</td>
							<td>{this.state.email}</td>
							<td><button>EDIT</button></td>
						</tr>
						<tr>
							<td>Phone</td>
							<td></td>
							<td><button>EDIT</button></td>
						</tr>
						<tr>""</tr>
						<tr>
							<td>Address</td>
						</tr>
						<tr>
							<td>House Number: </td>
							<td>{this.state.houseNumber}</td>
							<td><button>EDIT</button></td>
						</tr>
						<tr>
							<td>Street: </td>
							<td>{this.state.street}</td>
							<td><button>EDIT</button></td>
						</tr>
						<tr>
							<td>Town/City: </td>
							<td>{this.state.town}</td>
							<td><button>EDIT</button></td>
						</tr>
						<tr>
							<td>Posal Code: </td>
							<td>{this.state.postalCode}</td>
							<td><button>EDIT</button></td>
						</tr>
						<tr>
							<td>Province: </td>
							<td>{this.state.province}</td>
							<td><button>EDIT</button></td>
						</tr>
						<tr>
							<td>Country: </td>
							<td>{this.state.country}</td>
							<td><button>EDIT</button></td>
						</tr>
					</body>
				</table>

				<BasicUserSettings user={this.props.user} />
			</div>
		);
	}
};

export default UserSettings;