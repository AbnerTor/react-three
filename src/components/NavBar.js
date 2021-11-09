
import React, { useState } from 'react';
import Contact from './Contact';
import Projects from './Projects';
import AboutMe from './Aboutme';

const NavBar = () => {
    const [page, setPage] = useState('');

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
        <div class="flex flex-col w-full h-full font-mono">

            <nav className="flex justify-evenly items-center text-2xl py-2">
                <a
                    class={page === 'about' ? 'highlight navbar-brand' : 'navbar-brand'}
                    href="about"
                    onClick={() => setPage('#about')}
                >
                    About Me
                </a>
                <a
                    class={page === 'projects' ? 'highlight navbar-brand' : 'navbar-brand'} href="#projects"
                    onClick={() => setPage('projects')}
                >
                    Projects
                </a>
                <a
                    class={page === 'contact' ? 'highlight navbar-brand' : 'navbar-brand'} href="#contact hover:bg-gray-200"
                    onClick={() => setPage('contact')}
                >
                    Contact
                </a>
                <a class="navbar-brand" href="https://docs.google.com/document/d/1aIkqsrkrvlayxWPtyyC1XbQhXykzZGZGlY9ltnmueV4/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
            </nav>

            {showPage()}
        </div>

    );
}

export default NavBar;
