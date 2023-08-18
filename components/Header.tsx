import React, { useState } from "react";
import Link from 'next/link';

import { MdNightlightRound, MdWbSunny } from "react-icons/md";

function Header() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <header className={`container ${isDarkTheme ? 'dark-theme' : ''}`}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <strong>Yt2Mp4</strong>
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/pages/about">About us</Link>
          </li>
          <li>
            <Link href="/pages/contact">Contact</Link>
          </li>
          <li>
            <button
              id="theme-toggle"
              type="button"
              className="theme-toggle-button"
              onClick={toggleTheme}
            >
              {isDarkTheme ? (
                <MdWbSunny fill="white" className="theme-toggle-icon" />
              ) : (
                <MdNightlightRound fill="black" className="theme-toggle-icon" />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
