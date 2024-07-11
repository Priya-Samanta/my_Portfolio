import React from 'react'
import Link from 'next/link'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import { useDarkMode } from '../DarkModeContext';

const NavBar = () => {
    const { darkMode, setDarkMode } = useDarkMode();
    return (
        <div className={darkMode ? "dark" : ""}>
          <header className="text-gray-600 body-font dark:bg-gray-900">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between dark:text-white">
                <h1 className="font-burtons text-xl py-2 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent font-medium dark:from-teal-400 dark:to-blue-500">My Portfolio</h1>

              <nav className="md:ml-auto md:mr-0 flex flex-wrap items-center text-base justify-center dark:text-white">
                <Link href="/"><a className="mr-5 hover:text-gray-500">Home</a></Link>
                <Link href="/about"><a className="mr-5 hover:text-gray-500">About</a></Link>
                <Link href="/projects"><a className="mr-5 hover:text-gray-500">Projects</a></Link>
                <Link href="/contact"><a className="mr-5 hover:text-gray-500">Contact Me</a></Link>
                <ul className="flex items-center space-x-8">
                  <li>
                    <BsFillMoonStarsFill
                      onClick={() => setDarkMode(!darkMode)}
                      className="cursor-pointer text-2xl"
                    />
                  </li>
                  <li>
                    <a
                      className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 border-none rounded-md"
                      href="https://drive.google.com/file/d/1r-Tl_RR38T75BhkKCbpfDAiAwpehHPkR/view?usp=sharing"
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        </div>
      );
}

export default NavBar