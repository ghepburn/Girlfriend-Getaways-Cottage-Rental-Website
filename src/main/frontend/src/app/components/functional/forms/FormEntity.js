import React from 'react';

const FormEntity = (props) => {

    const handleChange = (event) => {
        props.handleChange(event.target.name, event.target.value);
    }

    const type = props.type ? props.type : "text";
    const defaultValue = props.defaultValue ? props.defaultValue : "";
    const errors = props.error ? props.error : "";
    const displayName = props.name.includes("_") ? props.name.replace("_", " ").toUpperCase() : props.name.toUpperCase(); 
    const name = props.name.includes("_") ? props.name.replace("_", "") : props.name;

    return (  
        <div className="form-entity">
            <p className="form-entity-error">{errors}</p>
            <label className="form-entity-label">{displayName}:</label>
            <input className="form-entity-input" type={type} name={name} defaultValue={defaultValue} onChange={handleChange} />
        </div>
    );
}
 
export default FormEntity;