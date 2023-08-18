import React, { useState } from "react";
import Link from 'next/link';

import { MdNightlightRound, MdWbSunny } from "react-icons/md";

function Header() {
  const [color, setColor] = useState('hidden')
  const [currentTheme, setCurrentTheme] = useState('dark')

  return (
    <header className="container">
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
            <button id="theme-toggle" type="button" className="theme-toggle-button" data-theme-switcher="light">
              {
                currentTheme === 'dark' ? (
                  <MdWbSunny fill='white' onClick={() => { setCurrentTheme('light') }} className={color} id="theme-toggle-light-icon" />
                ) : (
                  <MdNightlightRound onClick={() => setCurrentTheme('dark')} fill='black' className={color} id="theme-toggle-dark-icon" />
                )
              }
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;