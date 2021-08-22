import React from "react";
import logo from "../../images/logo.jpeg";
import "./header.css";
import { Input } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function Header() {
    return (
        <>
            <div className="App-header">
                <div className="image">
                    <img src={logo} alt="logo" width="182px" height="186px" />
                </div>
                <div className="name-desc">
                    <h1 className="name">Nirmal Bharati</h1>
                    <h2 className="desc">School of Child Education</h2>
                </div>
                <div className="social">
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                </div>
                <div className="search">
                    <Input placeholder="Search the site" inputProps={{ 'aria-label': 'description' }} />

                </div>

            </div>
        </>
    );
}