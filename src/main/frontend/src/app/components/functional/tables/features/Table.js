import React from 'react';

const Table = (props) => {

    const tableType = props.title ? `${props.title}-table` : "";

    return (

        <div className="table">
            <div className="inside-table">
                <p className="table-title">{props.title}</p>
                <table className={tableType}>
                        <tbody>
                            <tr>
                                {props.headers}
                            </tr>
                            {props.tableEntities}
                        </tbody>
                </table>
            </div>
        </div>
    );
    
}
 
export default Table;