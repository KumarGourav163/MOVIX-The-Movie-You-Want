import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    © Copyright All rights reserved by 
                    <a href="https://my-portfolio-2-drab.vercel.app" target="_blank" className="name">
                            _GOURAB KUMAR DASH
                        </a>
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <a href="https://www.facebook.com/lipu.dash.5895" target="_blank">
                            <FaFacebookF />
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://www.instagram.com/_kumar_gourav__/" target="_blank">
                            <FaInstagram />
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://x.com/KumarGo39129043" target="_blank">
                            <FaTwitter />
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://www.linkedin.com/in/gourab-kumar-dash-951965245/" target="_blank">
                            <FaLinkedin />
                        </a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
