
import React, { useState } from 'react';
import Contact from './Contact';
import Projects from './Projects';
import AboutMe from './Aboutme';

const NavBar = () => {
    const [page, setPage] = useState('');

    // render pages based on what user selected
    const showPage = () => {
        switch (page) {
            case 'about':
                return <AboutMe />;
            case 'projects':
                return <Projects />;
            case 'contact':
                return <Contact />;
            default:
                return <AboutMe />;
        }
    }

    return (
        <div className="flex flex-col bg-blue-200 h-5/6">

            <nav className="flex justify-evenly  items-center text-2xl pt-5 pb-10">
                <a
                    className="pt-20"
                    className={page === 'aboutme' ? 'highlight navbar-brand' : 'navbar-brand'}
                    href="#about"
                    onClick={() => setPage('about')}
                >
                    About Me
                </a>
                <a
                    className={page === 'projects' ? 'highlight navbar-brand' : 'navbar-brand'} href="#projects"
                    onClick={() => setPage('projects')}
                >
                    Projects
                </a>
                <a
                    className={page === 'contact' ? 'highlight navbar-brand' : 'navbar-brand'} href="#contact"
                    onClick={() => setPage('contact')}
                >
                    Contact
                </a>
                <a className="navbar-brand" href="https://docs.google.com/document/d/1aIkqsrkrvlayxWPtyyC1XbQhXykzZGZGlY9ltnmueV4/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
            </nav>

            {showPage()}
        </div>

    );
}

export default NavBar;
