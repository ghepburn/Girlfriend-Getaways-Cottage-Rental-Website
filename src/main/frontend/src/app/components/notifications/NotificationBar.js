import React, { Component } from "react";
import NotificationContext from "../context/NotificationContext";
import {withRouter} from "react-router-dom";

export class NotificationBar extends Component {

	constructor(props) {
		super(props);
		this.state={
			isNotification: false
		}
	}

	componentDidMount() {
		this.props.history.listen((location, action) => {
			if (this.props.notification.getTTL() <= 1) {
				this.props.removeNotification();	
			} else {
				this.props.notification.setTTL(this.props.notification.getTTL()-1);
			}
		})
	}

	render() {
		const showNotification = this.props.notification.getIsNotification() ? <h5>{this.props.notification.getMessage()}</h5> : '';

		return (
			<div>
				{showNotification}
			</div>
		);
	}
};

export default withRouter(NotificationBar);