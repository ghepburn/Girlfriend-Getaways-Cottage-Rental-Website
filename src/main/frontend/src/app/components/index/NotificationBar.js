import React, { Component } from "react";
import NotificationContext from "../globalState/notificationContext/NotificationContext";
import withNotificationContext from "../wrappers/withNotificationContext";

class NotificationBar extends Component {

	componentDidMount() {
		this.props.history.listen((location, action) => {
			this.onRouteChange()
		})
	}

	onRouteChange = () =>{
		let notificationContext = this.props.notificationContext;
		if (notificationContext.notification.message !== null) {
			notificationContext.notification.TTL = notificationContext.notification.TTL-1;
			if (notificationContext.notification.TTL <= 1) {
				notificationContext.removeNotification();
			}	
		}
	}

	render() {
		let notificationContext = this.props.notificationContext;
		const showNotification = notificationContext.notification.isNotification ? <h5>{notificationContext.notification.message}</h5> : '';

		return (
			<div>
				{showNotification}
			</div>
		);
	}
};

export default withNotificationContext(NotificationBar);