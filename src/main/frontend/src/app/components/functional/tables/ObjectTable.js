import React from 'react';

import Table from "./features/Table";
import TableEntity from "./features/TableEntity";

// takes a single object as input
// formulates two static headers
// sends a key and value as an array to Enity Table Component

const ObjectTable = (props) => {

    const allObjKeys = Object.keys(props.inputs);
    const allObjValues = Object.values(props.inputs);
    
    const headers = [<td className="table-header">Setting</td>];
    
    const tableEntities = allObjKeys.map((key, index) => {
        const arrayOfValues = [ key ];
        return(<TableEntity {...props} data={arrayOfValues} buttonText={props.buttonText} />);
    })
    return (

        <Table {...props} headers={headers} tableEntities={tableEntities}/>

    );
    
}
 
export default ObjectTable;