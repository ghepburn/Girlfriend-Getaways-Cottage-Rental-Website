import React, {useContext} from 'react';

import SettingsContext from '../../../globalState/settingsContext/SettingsContext';

import withNotificationContext from "../../../wrappers/withNotificationContext";

import Form from "../../../functional/forms/Form";

const AdminEditSettings = (props) => {

    // const settingsContext = useContext(SettingsContext);
    
    // const settings = settingsContext.settings;
    // const settingToEdit = props.match.params.setting;
    
    // const handleSubmit = (settingToEditValue) => {
    //     settings[settingToEdit] = settingToEditValue;
    //     settingsContext.setSettings(settings); 
    // }

    // const formInputs = [
    //     {   
    //         name: settingToEdit, 
    //         defaultValue: settings[settingToEdit]
    //     }
    // ]

    return (  
        <div classname="admin-edit">
            EDIT
            {/* <Form title={settingToEdit} action="Save" inputs={formInputs} handleSubmit={handleSubmit} /> */}
        </div>
    );
}
 
export default withNotificationContext(AdminEditSettings);