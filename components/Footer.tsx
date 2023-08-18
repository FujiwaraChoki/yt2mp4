import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <footer className='container-fluid'>
            <nav>
                <ul>
                    <li>Copyright 2023 Sami Hindi</li>
                </ul>
                <ul>
                    <li>
                        <Link href="https://github.com/fujiwarachoki/"> <FaGithub size={35} /> </Link>
                    </li>
                    <li>
                        <Link href="https://twitter.com/chokifujiwara/"> <FaTwitter size={35} /> </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;