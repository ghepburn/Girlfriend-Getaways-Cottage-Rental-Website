import React from 'react';

const PrimaryNavbar = (props) => {
    return (  
        <nav className="primary-navbar">
            <ul className="primary-navbar-list">
                {props.children}
            </ul>
        </nav>
    );
}
 
export default PrimaryNavbar;