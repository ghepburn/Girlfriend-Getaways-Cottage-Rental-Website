import React from 'react';

const Button = (props) => {
    return (  
        <button type="button" className="button" {...props} >
            {props.children}
        </button>
    );
}
 
export default Button;