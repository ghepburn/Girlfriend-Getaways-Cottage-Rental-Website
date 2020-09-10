import React from 'react';
import FormValidator from "./FormValidator";

const Form = (props) => {
    return (  
        <div className="form">
            <FormValidator>
                {props.children}
            </FormValidator>
        </div>
    );
}
 
export default Form;