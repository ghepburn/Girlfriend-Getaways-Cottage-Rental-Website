import React from 'react';

const PrimaryFooter = (props) => {
    return (  
        <footer className="primary-footer">    
            <ul>
                {props.children}
            </ul>
        </footer>
    );
}
 
export default PrimaryFooter;