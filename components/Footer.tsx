import React from 'react';
import { FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <footer className='container-fluid'>
            <nav>
                <ul>
                    <li>Copyright By Rajdeep singh</li>
                </ul>
                <ul>
                    <li>
                        <a> <FaGithub/> </a>
                    </li>
                    <li>
                        <a> <FaTwitter /> </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;