import React from 'react';

import Table from "./features/Table";
import TableEntity from "./features/TableEntity";

// takes an array of objects as input
// formulates headers from oject keys
// sends an array of in order values to Table Entity Component

const ArrayTable = (props) => {

    const allObjKeys = props.inputs.length > 0 ? Object.keys(props.inputs[0]) : [];

    const objKeysToInclude = props.toInclude ? allObjKeys.filter(key => props.toInclude.includes(key)) : allObjKeys;
    
    const headers = props.inputs.length > 0 ? objKeysToInclude.map(key => <td className="table-header">{key}</td>) : "";
    
    const tableEntities = props.inputs.length > 0 ? props.inputs.map(input => {
        const arrayOfValues = objKeysToInclude.map(item => typeof input[item] === "object" ? null : input[item]);
        return(<TableEntity {...props} data={arrayOfValues} buttonText={props.buttonText} />);
    }) : "";

    return (

        <Table {...props} headers={headers} tableEntities={tableEntities}/>

    );
    
}
 
export default ArrayTable;