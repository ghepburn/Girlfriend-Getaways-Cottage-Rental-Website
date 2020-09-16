import React from 'react';
import {withRouter} from "react-router-dom"

const TableEntity = (props) => {
    
    const tableData = props.data;
    const data = tableData.map(value => {
        
        const displayedValue = typeof value === "boolean" ? value.toString(): value;
        return(<td>{displayedValue}</td>);
        
    })

    const onClick = props.onClick ? props.onClick : ()=>{props.history.push(`/admin/${props.title.toLowerCase()}/${props.data[0]}`)};
    
    const button = props.buttonText ? <td><button className="table-entity-button button" onClick={onClick} > {props.buttonText} </button></td> : "";

    return ( 
        <tr>
            {data}
            {button}
        </tr>
    );
}
 
export default withRouter(TableEntity);