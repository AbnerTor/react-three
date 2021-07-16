import React from 'react';
import loSiento from './assets/LoSientoSS.PNG'
import projectDoge from './assets/project2SS.PNG'
import BudgetTracker from './assets/budgetTrackerss.jpg'


const Projects = () => {
    return (

        <div className="bg-gray-800 h-96 text-white ">
            <div className="">
                <div>
                    <h1 className="text-xl ml-40 mt-20">
                        Here Are some of the Projects that I have worked on. Take a look.
                    </h1>
                </div>

                <div className="flex flex-row w-full mt-10 justify-evenly" id="projectContainer">

                    <div className="mx-5 text-3xl" id="projectLoSiento">
                        <div id="loSientoProject">
                            <h1 id="lsHeader">Project LoSiento</h1>
                            <a href="https://losiento.herokuapp.com/">
                            <img className="text-base" src="loSiento" alt="ProjectLoSiento"/>
                            </a>
                        </div>
                    </div>

                    <div className="mx-5 text-3xl" id="projectDoge">
                        <div id="loSientoProject">
                            <h1 id="lsHeader">Project Two</h1>
                            <a classname=""href="https://abnertor.github.io/WantADog/">
                                <img className="text-base" id="projectDoge" src="projectDoge"
                                alt="Project-2" />

                            </a>
                        </div>
                    </div>

                    <div className="mx-5 text-3xl" id="budgetTracker">
                        <div id="loSientoProject">
                            <h1 id="lsHeader">Budget Tracker</h1>
                            <a href="https://shrouded-dawn-63553.herokuapp.com/"><img className="text-base" id="budgetTracker" src="assets/images/LoSientoSS.PNG"
                                alt="Budget Tracker" />

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Projects;