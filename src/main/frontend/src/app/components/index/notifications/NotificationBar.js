import React, {useContext} from 'react';
import NotificationContext from "../../globalState/notificationContext/NotificationContext";
import Alert from "../../events/Alert";

const NotificationBar = (props) => {

    const notificationContext = useContext(NotificationContext);
    let notification = notificationContext.notification;
    let alert = notification.isNotification ? <Alert action={notification.action} message={notification.message} /> : ""; 
    
    return (  

        <div className="notificationbar">
            {alert}
        </div>
    
        );
}
 
export default NotificationBar;