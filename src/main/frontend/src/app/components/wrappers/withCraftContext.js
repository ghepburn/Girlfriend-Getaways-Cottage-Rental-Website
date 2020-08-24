import React from "react";
import CraftContext from "../globalState/craftContext/CraftContext";


const withCraftContext = (WrappedComponent) => {
	return (props) => {
		return(
			<CraftContext.Consumer>
				{value => <WrappedComponent {...props} craftContext={value} />}
			</CraftContext.Consumer>
		);
	};
}

export default withCraftContext;