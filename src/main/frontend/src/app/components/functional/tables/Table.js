import React from 'react';

const Table = (props) => {

    const obj = props.inputs[0];
    console.log(typeof Object.keys(obj) !== 'null');


    const tableType = `${props.title}-table`;

    // const tableHeaders = Object.keys(props.inputs[0]).map(key => <th>{key}</th>);
    const tableInputs = <tr>inputs</tr>;

    return (  
        <div className="table">
            <div className="inside-table">
                <table className={tableType}>
                    <p className="table-title">{props.title}</p>
                        <tr>
                            {/* {tableHeaders} */}
                        </tr>
                        {tableInputs}
                </table>
            </div>
        </div>
    );
}
 
export default Table;