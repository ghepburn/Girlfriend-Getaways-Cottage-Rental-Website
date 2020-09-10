import React from 'react';
import Navbar from "./navigation/Navbar";
import NotificationBar from "./notifications/NotificationBar";

const Header = (props) => {
    return (  
        <div className="primary-header">
            <Navbar {...props} />
            <NotificationBar />
        </div>
    );
}
 
export default Header;