import React, { useState } from "react";

import PrimaryNavbar from "./navbars/PrimaryNavbar";
import MobileBurger from "./navbars/MobileBurger";

import Nav from "./navs/Nav";
import AuthenticatedNav from "./navs/AuthenticatedNav";
import AdminNav from "./navs/AdminNav";
import AnonymousNav from "./navs/AnonymousNav";

const Navbar = () => {
    let [mobileMenuActive, toggleMobileMenu] = useState(false);
    
    const handleBurgerClick = () => {
        toggleMobileMenu(!mobileMenuActive);
    }

    let primaryNavClass = mobileMenuActive ? "primary-navs nav-active" : "primary-navs"; 
    
    return (

            <PrimaryNavbar >
                <div className="logo">
                    <h2>Girlfriend Getaways</h2>
                </div>
                <div className={primaryNavClass}>
                    <Nav name="Home" path="/" />
                    <Nav name="About" path="/about"/>
                    <Nav name="Availability" path="availability"/>

                    <AnonymousNav name="Login" path="/login" />
                    <AnonymousNav name="Register" path="/registration" />

                    <AuthenticatedNav name="Logout" path="/logout" />
                    <AuthenticatedNav name="Account" path="/account" />

                    <AdminNav name="Admin" path="/admin" />
                </div>
                
                <div className="mobile-nav" onClick={handleBurgerClick}>
                    <MobileBurger />
                </div>
                
            </PrimaryNavbar >

	);
};

export default Navbar;