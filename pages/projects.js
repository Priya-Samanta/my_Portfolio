import React from "react";
import Image from "next/image";
import Brain from "../public/Brain.png";
import sentiment from "../public/sentiment.jpg";
import EEG from "../public/EEG.png"
import { DarkModeProvider, useDarkMode } from '../context/DarkModeContext';

const Projects = () => {
    const { darkMode } = useDarkMode();
    return (
        <div className={darkMode ? "dark" : ""}>
          <div className="dark:bg-gray-900">
            <h3 className="text-3xl py-1 px-5 dark:text-white ">Projects</h3>
            
          </div>
          <div className="lg:flex gap-10 dark:bg-gray-900">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image alt="" src={Brain} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Web Application
              </h3>
              <p className="py-2">
              Developed a platform for individuals with ADHD to exercise cognitive skills through engaging games. 
              Promotes daily mind workouts to effectively challenge and stimulate brain power. 
              </p>
              <h4 className="py-4 text-teal-600">Design Tools and Frameworks</h4>
              <p className="text-gray-800 py-1">Strapi.io</p>
              <p className="text-gray-800 py-1">Next.js</p>
              <p className="text-gray-800 py-1">Tailwind CSS</p>
              <p className="text-gray-800 py-1"></p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image alt="" src={sentiment} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Sentiment Analysis
              </h3>
              <p className="py-2">
              Implemented an opinion mining tool to determine the sentiment (positive, negative, or neutral) of 
              tweets. 
              </p>
              <h4 className="py-4 text-teal-600">Design Tools ans Frameworks</h4>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">Twitter APIs</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image alt="" src={EEG} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Web Application</h3>
              <p className="py-2">
              EEG Signal Processing and Analysis Methods for BCI
              </p>
              <h4 className="py-4 text-teal-600">Design Tools and Frameworks</h4>
              <p className="text-gray-800 py-1">HTML CSS JavaScript</p>
              <p className="text-gray-800 py-1">SVM</p>
              <p className="text-gray-800 py-1">Python</p>
            </div>
          </div>
          </div>
    )
}

const App = () => (
  <DarkModeProvider>
    <Projects />
  </DarkModeProvider>
);

export default Projects