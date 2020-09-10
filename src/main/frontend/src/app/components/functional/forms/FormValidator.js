import React from 'react';
import ValidationManager from "../../managers/ValidationManager";

const FormValidationContext = React.createContext();

const FormValidator = (props) => {

    const validateInput = async (name, value) => {
        return await ValidationManager.getErrors(name, value);
    }

    return (  
        <FormValidationContext.Provider value={validateInput}>
            {props.children}
        </FormValidationContext.Provider>
    );
}
 
export default FormValidator;