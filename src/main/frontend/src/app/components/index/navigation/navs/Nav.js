import React from 'react';
import { Link } from "react-router-dom";

const Nav = (props) => {
    return(
        <li className="nav">
            <Link to={props.path}>
                {props.name}
            </Link>
        </li>
    );
}

export default Nav;