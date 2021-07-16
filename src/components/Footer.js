import React from 'react';
import LinkedIn from '../assets/icons/linkedInLogo.png';
import GitHub from '../assets/icons/gitHub.png'


const Footer = () => {

    return (

        <div className="flex flex-row space-x-5 justify-center items-center h-48 bg-green-200">

            <div> <a href="https://www.linkedin.com/in/toribioabner/"> <img className="h-16" src={LinkedIn} alt="LinkedIn-logo" /> </a></div>

            <div> <a href="https://github.com/AbnerTor"> <img className="h-16" src={GitHub} alt="Github-logo"/> </a></div>
        </div>
    )
}

export default Footer;