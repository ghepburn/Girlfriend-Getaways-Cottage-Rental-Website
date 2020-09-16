import React from 'react';

const ConvertObjectToArray = ({obj}) => {

    const objKeys = Object.keys(obj);
    const objValues = Object.values(obj);
    
    const objArray = objKeys.map((key, index) => {
        return({key: objValues[index]});
    })
    console.log(objArray);
    return (objArray);
}
 
export default ConvertObjectToArray;