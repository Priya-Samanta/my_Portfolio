import React from 'react'
import { useState } from 'react';
import { DarkModeProvider, useDarkMode } from '../../context/DarkModeContext';

const Footer = () => {
    const { darkMode } = useDarkMode();
  return (
    <div className={darkMode ? "dark" : ""}><footer className="text-gray-600 body-font dark:bg-gray-900 dark:text-gray-400">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col dark:text-white">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 dark:text-gray-400">© 2024 Portfolio —
        <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1 dark:text-gray-500" rel="noopener noreferrer" target="_blank">@priyaSamanta</a>
      </p>
    </div>
  </footer></div>
  )
}

export default Footer