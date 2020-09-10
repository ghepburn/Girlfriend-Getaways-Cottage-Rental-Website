import React from 'react';

const Alert = (props) => {
   return(
        <div className="alert">
            <p className={props.action}>{props.message}</p>
        </div>
   );
}
 
export default Alert;