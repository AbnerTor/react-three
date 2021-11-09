import React from 'react';
import Headshot from '../assets/Headshot.png';

const AboutMe = () => {

    return (
        <div class="bg-gray-800 pb-20 flex flex-col items-center pt-10" id="textDiv">

            <div class="mt-10 flex justify-center">
                <img class="rounded-lg h-96" src={Headshot} alt="Das me" />
            </div>

            <div>
                <h1 class="text-white">No great thing is created suddenly...</h1>
            </div>

            <div class="w-1/2 flex flex-col">

                <p className="flex my-10 pb-15 w-full text-white">Hello, my name is Abner Toribio-Vazquez, I’m an aspiring web developer. I have an AS
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



        </div>

    )
}

export default AboutMe;