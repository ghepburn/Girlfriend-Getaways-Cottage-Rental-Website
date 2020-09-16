import React, {useContext} from "react";
import NotificationContext from "../globalState/notificationContext/NotificationContext";
import NotificationManager from "../managers/NotificationManager";

const withNotificationContext = (WrappedComponent) => {
	return (props) => {

		const notificationContext = useContext(NotificationContext);

		const sendNotification = (type, input) => {
			const notification = NotificationManager.getNotification(type, input);
			notificationContext.sendNotification(notification);
			return notification;
		}	

		return(
			<WrappedComponent {...props} sendNotification={sendNotification} />
		);
	}

}

export default withNotificationContext;
