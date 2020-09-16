import React, { useEffect } from 'react';

import RequestHeaderSetup from "./RequestHeaderSetup";
import BookingDataAPICall from "./BookingDataAPICall";

const AppSetup = (props) => {
    
    return (
        <React.Fragment>
            
            <RequestHeaderSetup />
            <BookingDataAPICall />
        </React.Fragment>
    );
}
 
export default AppSetup;