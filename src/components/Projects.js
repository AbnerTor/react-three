import React from 'react';
import loSiento from '../assets/LoSientoSS.PNG'
import Doge from '../assets/project2SS.PNG'
import BudgetTracker from '../assets/budgetTrackerss.jpg'


const Projects = () => {
    return (

        <div className="bg-gray-800 h-auto pb-20 text-white font-mono">
            <div className="">
                <h1 className="text-xl ml-40 mt-20">
                    Here Are some of the Projects that I have worked on. Take a look.
                </h1>

                <div className="flex flex-row w-full mt-10 justify-evenly" id="projectContainer">

                    <div className="grid mx-5 text-3xl justify-items-center" id="projectLoSiento">
                        <h1 className="mb-2">Project LoSiento</h1>
                        <a href="https://losiento.herokuapp.com/">
                            <img className="text-base h-60 rounded" src={loSiento} alt="ProjectLoSiento" />
                        </a>
                        <a href="https://github.com/AbnerTor/LoSiento"><p className="text-base pt-2">Visit the Repo</p></a>
                    </div>

                    <div className="grid justify-items-center mx-5 text-3xl" id="projectDoge">
                        <h1 className="mb-2">Project Two</h1>
                        <a className="" href="https://abnertor.github.io/WantADog/">
                            <img className="text-base h-60 rounded" id="projectDoge" src={Doge}
                                alt="Project-2" />
                        </a>
                        <a href="https://github.com/AbnerTor/WantADog"><p className="text-base pt-2">Visit the Repo</p></a>
                    </div>

                    <div className="grid justify-items-center mx-5 text-3xl" id="budgetTracker">
                            <h1 className="mb-2">Budget Tracker</h1>
                            <a href="https://shrouded-dawn-63553.herokuapp.com/"><img className="text-base h-60 rounded" src={BudgetTracker}
                                alt="Budget Tracker" />
                            </a>
                            <a href="https://github.com/AbnerTor/week18-PWA"><p className="text-base pt-2">Visit the Repo</p></a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Projects;