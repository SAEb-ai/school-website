import React, { useState } from "react";
import { NavLink, Router } from "react-router-dom";
import { Carousel } from "react-bootstrap";


import "./navbar.css";

export default function Navbar() {

    return (
        <>

            <nav>
                <ul className="nav-ul">
                    <li className="nav-li">
                        <NavLink to="/"
                            className="nav-text-dec nav-li-font nav-item-hover">

                            Home
                        </NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to="/about"
                            className="nav-text-dec nav-li-font nav-item-hover"
                        >
                            About
                        </NavLink>
                    </li>

                    <li className="nav-li">
                        <NavLink to="/contact-us"
                            className="nav-text-dec nav-li-font nav-item-hover"
                        >
                            Contact Us
                        </NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to="/sign-up"
                            className="nav-text-dec nav-li-font nav-item-hover-sign"

                        >
                            SignUp
                        </NavLink>


                    </li>
                    <li className="nav-li">
                        <NavLink to="/sign-in"
                            className="nav-text-dec nav-li-font nav-item-hover-sign"

                        >
                            SignIn
                        </NavLink>

                    </li>
                    <li className="nav-li">
                        <NavLink to="/admin"
                            className="nav-text-dec nav-li-font nav-item-hover-admin"
                        >
                            Admin
                        </NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to="/"
                            className="nav-text-dec nav-li-font nav-item-hover-sign">

                            Admissions 2021
                        </NavLink>
                    </li>
                </ul>
            </nav>

            
        </>
    );

}