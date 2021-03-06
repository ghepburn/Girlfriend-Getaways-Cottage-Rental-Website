import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import Nav from "./Nav";
import AuthContext from "../../../globalState/authContext/AuthContext";

const AdminNav = (props) => {
    const userContext = useContext(AuthContext);
    if (userContext.user.isAuthenticated && userContext.user.isAdmin) {
        return(
           <Nav name={props.name} path={props.path} />
        );
    } else {
        return(
            false
        );
    }
    
}

export default AdminNav;