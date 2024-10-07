import React from 'react'
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillGithub,
    AiFillInstagram,
  } from "react-icons/ai";
import { DarkModeProvider, useDarkMode } from '../context/DarkModeContext';

const Contact = () => {
    const { darkMode } = useDarkMode();
  return (
    <div className='container mx-auto px-4 '>
    <section className="text-gray-600 body-font relative dark:bg-gray-900">
      <div className="container px-5 py-5 mx-auto flex justify-center items-center dark:bg-gray-900">
            <div className="text-10xl flex flex-col items-center gap-8 py-3 text-gray-600 dark:text-gray-400 dark:bg-white">
                    <AiFillTwitterCircle onClick={() => window.open('https://x.com/samantapriya59')}
                        className=" cursor-pointer text-2xl"/>
                    <AiFillLinkedin onClick={() => window.open('https://www.linkedin.com/in/priya-samanta-8a99a524b/')}
                        className=" cursor-pointer text-2xl"/>
                    <AiFillGithub onClick={() => window.open('https://github.com/Priya-Samanta')}
                        className=" cursor-pointer text-2xl"/>
                    <AiFillInstagram onClick={() => window.open('')}
                        className=" cursor-pointer text-2xl" />
            </div>
            <div className="lg:w-1/2 md:w-1/2 w-full bg-white rounded-lg p-8 flex flex-col md:ml-auto mt-10 md:mt-0 relative z-10 shadow-md dark:text-gray-400 dark:bg-white">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Me</h2>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                    <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <button className="bg-gradient-to-r from-blue-500 text- to-teal-500 text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
            </div>
      </div>
    </section>
  </div>
  )
}

const App = () => (
  <DarkModeProvider>
    <Contact />
  </DarkModeProvider>
);

export default Contact