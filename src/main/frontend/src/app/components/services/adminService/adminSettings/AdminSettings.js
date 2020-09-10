import React, { useContext } from 'react';
import SettingsContext from "../../../globalState/settingsContext/SettingsContext";
import AdminSettingsForm from "../../../forms/AdminSettingsForm";

const AdminSettings = () => {
    
    const settingsContext = useContext(SettingsContext);
    const settings = settingsContext.settings;

    const onChange = (settings) => {
        settingsContext.setSettings(settings);
    }

    return (  
        <div className="admin-settings">
            <p className="page-title">Settings</p>
            <AdminSettingsForm settings={settings} onChange={onChange}/>
        </div>
    );
}
 
export default AdminSettings;