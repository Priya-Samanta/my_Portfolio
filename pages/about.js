import React from 'react';
import { DarkModeProvider, useDarkMode } from '../context/DarkModeContext';


const About = () => {
    const { darkMode } = useDarkMode();
return (
        <div className={darkMode ? 'dark' : ''}>
        <div className="text-center p-10 py-10 dark:bg-gray-900">
            <h2 className="text-5xl py-2 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent font-medium dark:from-teal-400 dark:to-blue-500 md:text-6xl">
              Priya Samanta
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              About myself
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Hello! I am Priya Samanta, a fourth-year computer science engineering student at Indian Institute of Engineering Science and technology, Shibpur. I am passionate about using technology to solve real-world problems and make a positive impact. With a strong foundation in computer science fundamentals, I have developed skills in programming languages such as C/C++, HTML, CSS, JavaScript, Python, as well as experience with data structures, algorithms, and software engineering. 
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Throughout my academic journey, I have been involved in various projects and extracurricular activities that showcase my creativity, teamwork, and problem-solving skills. I am excited to share some of these projects with you in my portfolio Projects section.
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            In addition to my technical skills, I possess excellent communication and teamwork skills, with experience working on group projects and collaborating with cross-functional teams.
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            I am looking forward to graduating and starting my career in the tech industry, where I can apply my skills and knowledge to make a meaningful impact.
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Feel free to explore my portfolio and get in touch with me to discuss potential opportunities or collaborations!
            </p>

            
        </div>
        </div>
    )
}
const App = () => (
  <DarkModeProvider>
    <About />
  </DarkModeProvider>
);
export default About