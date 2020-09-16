import React, {useContext, useEffect} from 'react';
import {withRouter} from "react-router-dom";
import NotificationContext from "../../globalState/notificationContext/NotificationContext";

const RouteEventListener = (props) => {
    const notificationContext = useContext(NotificationContext);
    let currentNotification = notificationContext.notification;

    props.history.listen((location, action) => {

        // if current notificaiton TTL (time to live) equals 1, then remove notification
        // otherwise reduce TTL by one
        
        if (currentNotification.message !== null) {
            if (currentNotification.TTL == 1) { 
                notificationContext.removeNotification()
            } else {
                let updatedNotification = currentNotification;
                updatedNotification.TTL = currentNotification.TTL - 1;
                notificationContext.sendNotification(updatedNotification);
            }
        }


    });

    return(null);
}
 
export default withRouter(RouteEventListener);