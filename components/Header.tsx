import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { MdNightlightRound, MdWbSunny } from "react-icons/md";

function Header() {
  const [currentTheme, setCurrentTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      setCurrentTheme('light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      setCurrentTheme('dark');
    }
  };

  useEffect(() => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    if (document.documentElement.getAttribute("data-theme") === "dark") {
      themeToggleLightIcon?.classList.add('hidden');
      themeToggleDarkIcon?.classList.remove('hidden');
    } else {
      themeToggleDarkIcon?.classList.add('hidden');
      themeToggleLightIcon?.classList.remove('hidden');
    }

    themeToggleBtn?.addEventListener('click', toggleTheme);

    return () => {
      themeToggleBtn?.removeEventListener('click', toggleTheme);
    };
  }, [currentTheme]);

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
                  <MdWbSunny fill='white' onClick={toggleTheme} id="theme-toggle-light-icon" />
                ) : (
                  <MdNightlightRound onClick={toggleTheme} fill='black' id="theme-toggle-dark-icon" />
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
