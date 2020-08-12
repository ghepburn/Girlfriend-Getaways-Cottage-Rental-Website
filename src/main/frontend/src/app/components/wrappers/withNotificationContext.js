import React from "react";
import NotificationContext from "../globalState/notificationContext/NotificationContext";

const withNotificationContext = (WrappedComponent) => {
	return (props) => {
		return (
			<NotificationContext.Consumer>
				{
					value => <WrappedComponent {...props} notificationContext={value}/>
				}
			</NotificationContext.Consumer>	
		);
	}
}

export default withNotificationContext;
