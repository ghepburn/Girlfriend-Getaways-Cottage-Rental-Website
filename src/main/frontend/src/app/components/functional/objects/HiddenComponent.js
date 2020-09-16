import React, {useState} from 'react';

const HiddenComponent = (props) => {

    return (  
        <div {...props} style={{display: [props.isHidden ? "none" : "block"]}} >
            {props.children}
        </div>
    );
}
 
export default HiddenComponent;