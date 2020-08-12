import React from "react";
import AuthContext from "../globalState/authContext/AuthContext";


const withAuthContext = (WrappedComponent) => {
	return (props) => {
		return(
			<AuthContext.Consumer>
				{value => <WrappedComponent {...props} authContext={value} />}
			</AuthContext.Consumer>
		);
	};
}

export default withAuthContext;