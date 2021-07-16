import React from 'react';
import Portrait from '../assets/portrait.jpeg'

const AboutMe = () => {

    return (
        <div className="bg-gray-800 w-full h-auto pb-20 flex flex-row justify-center pt-10" id="textDiv">


            <div className="w-1/3">

                <p className="flex ml-20 my-10 pb-15 w-full text-white">Hello there, name is Abner Toribio-Vazquez, I’m an aspiring web developer. I have an AS
                    Degree in Business Administration with a background in sales. I did sales among many other
                    things for
                    a few years, but I felt disconnected from my work, I didn't feel like I was working towards
                    something
                    that I was passionate about, and so in late 2020, I decided to change career paths and
                    signed up for
                    the coding bootcamp at UNC Chapel Hill. I am still undergoing the process of learning web
                    development
                    but I have high hopes for what lies ahead.
                </p>

                <h3 className="flex ml-20 text-white w-1/3" id="listHeader"> Here are some of the technologies I'm familiar with:</h3>

                <ul className="flex flex-col ml-32 text-white list-disc" id="familiarTech">
                    <li>HTML & CSS</li>
                    <li>Javascript & Jquery</li>
                    <li>NodeJS</li>
                    <li>Bootstrap & Tailwind</li>
                    <li>MySql and Sequelize</li>
                    <li>MongoDB and Mongoose</li>
                    <li>React (This page was made with React!)</li>
                </ul>
            </div>

            <div className="w-1/3 ml-40 mt-10">
                <img className="h-96 rounded-lg br-solid shadow-xl" src={Portrait} alt="Das me" />
            </div>

        </div>

    )
}

export default AboutMe;