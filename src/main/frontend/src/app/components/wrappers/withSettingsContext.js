import React from "react";
import SettingsContext from "../globalState/settingsContext/SettingsContext";

const withSettingsContext = (WrappedComponent) => {
	return (props) => {
		return (
			<SettingsContext.Consumer>
				{
					value => <WrappedComponent {...props} SettingsContext={value}/>
				}
			</SettingsContext.Consumer>	
		);
	}
}

export default withSettingsContext;