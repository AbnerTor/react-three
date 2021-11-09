import React from 'react';
import Headshot from '../assets/Headshot.png';

const AboutMe = () => {

    return (
        <div class="bg-gray-800 pb-20 flex flex-col items-center pt-10 font-mono" id="textDiv">

            <div class="mt-10 mb-5 flex justify-center">
                <img class="rounded-lg h-96" src={Headshot} alt="Das me" />
            </div>

            <div>
                <h1 class="text-white text-2xl">"No great thing is created suddenly..."</h1>
                <h1 class="flex flex-row-reverse text-white text-2xl pb-10">-Epictetus</h1>
            </div>

            <div class="w-1/2 flex flex-col">

                <p className="flex my-10 pb-15 w-full text-white">Hello, my name is Abner, and to address that quote that is just below a fantastic picture of myself, I do try to live by it. I try not to be pretentious and pretend like I am some deep thinker, but rather I try to acknowledge that like many things, I will have to try many time before I reach my goal. Whatever it may be. That being said, I am a web developer, and trying to get better everyday. I took part in the UNC Coding Bootcamp that started in January of 2021, and finished in late June, some things came up soon after that but I am back on track to do some coding! I also have an Associates Degree in Business Administration, and like to build PC's. Now that you know a little about me, feel free to reach out so we can get to know each other a little bit better and build something that could benefit us both. I look forward to hearing from you soon!
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