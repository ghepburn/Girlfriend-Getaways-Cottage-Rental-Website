import React from 'react';

import RestManager from "../../managers/RestManager";

const RequestHeaderSetup = () => {
    
    RestManager.setupAxiosInitialInterceptors();
    
    return null;
}
 
export default RequestHeaderSetup;