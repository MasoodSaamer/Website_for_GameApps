import codeImg from "../../assets/code.png";
import gm1v1 from "../../assets/game1v1.jpg";
import gm1v2 from "../../assets/game1v2.jpg";
import gm2v1 from "../../assets/game2v1.jpg";
import gm2v2 from "../../assets/game2v2.jpg";
import gm2v3 from "../../assets/game2v3.jpg";
import gm3v1 from "../../assets/game3v1.jpg";
import gm3v2 from "../../assets/game3v2.jpg";
import gm3v3 from "../../assets/game3v3.jpg";
import gm4v1 from "../../assets/game4v1.jpg";
import gm4v2 from "../../assets/game4v2.jpg";
import gm4v3 from "../../assets/game4v3.jpg";
import gm5v1 from "../../assets/game5v1.jpg";
import gm5v2 from "../../assets/game5v2.jpg";
import gm5v3 from "../../assets/game5v3.jpg";
import gm6v1 from "../../assets/game6v1.jpg";
import gm6v2 from "../../assets/game6v2.jpg";
import gm6v3 from "../../assets/game6v3.jpg";
import gm7v1 from "../../assets/game7v1.jpg";
import gm7v2 from "../../assets/game7v2.jpg";
import gm7v3 from "../../assets/game7v3.jpg";
import gm8v1 from "../../assets/game8v1.jpg";
import gm8v2 from "../../assets/game8v2.jpg";
import gm8v3 from "../../assets/game8v3.jpg";
import gm9v1 from "../../assets/game9v1.jpg";
import gm9v2 from "../../assets/game9v2.jpg";
import gm9v3 from "../../assets/game9v3.jpg";
import gm10v1 from "../../assets/game10v1.jpg";
import gm10v2 from "../../assets/game10v2.jpg";
import gm10v3 from "../../assets/game10v3.jpg";
import gm11v1 from "../../assets/game11v1.jpg";
import gm11v2 from "../../assets/game11v2.jpg";
import gm11v3 from "../../assets/game11v3.jpg";
import gm12v1 from "../../assets/game12v1.jpg";
import gm12v2 from "../../assets/game12v2.jpg";
import gm12v3 from "../../assets/game12v3.jpg";
import gm13v1 from "../../assets/game13v1.jpg";
import gm13v2 from "../../assets/game13v2.jpg";
import gm13v3 from "../../assets/game13v3.jpg";

import { resourcesLinks, platformLinks, communityLinks } from "../../constants"


const PublishedGamesHeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Published 
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                {" "}
                Games
            </span>
        </h1>
        <p className="mt-5 text-lg text-center text-neutral-500 max-w-4xl">
            Here is a list of games we have developed and published onto the Google Playstore
        </p>

        <hr className="my-10 w-full border-t-2 border-gray-800" />

        <div className="flex flex-wrap justify-center">
            <div className="flex flex-col items-center p-2  w-1/3 mt-20"> 
                <img className="border-2 border-orange-500 mb-4 w-full lg:w-1/3" src={codeImg} alt="Code Image" />
                <div className="grid grid-cols-2 gap-4">
                    <img className="border-2 border-orange-500 w-full" src={gm1v1} alt="Code Image" />
                    <img className="border-2 border-orange-500 w-full" src={gm1v2} alt="Code Image" />
                </div>
            </div>
            <div className="pt-5 w-full lg:w-1/2 text-center">
                <h3 className="flex mb-2 text-2xl justify-center ml-5 mt-7">
                    Indian Car Simulator Game
                </h3>
                <p className="text-md text-neutral-500 ml-5">
                    A high graphics 3D car simulation game featuring Indian cars for driving & drifting and open world with player roaming,
                     realistic car physics, graphics & multiplayer mode                
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Total installs: 1,000,000+
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Current version: v9.5
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Last updated: Aug 3, 2024
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Original Release: Sep 23, 2021
                </p>
                <div className="flex justify-center my-10">
                    <a href="https://play.google.com/store/apps/details?id=com.PoliceProtocol.IndianCarSimulatorGame" target="_blank" rel="noopener noreferrer"  className="bg-gradient-to-r from bg-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:bg-orange-600 hover:to-orange-900 hover:text-white">
                        Play now
                    </a>
                    
                </div>
            </div>
        </div>

        <hr className="my-10 w-full border-t-2 border-gray-800" />

        


        <div className="flex flex-wrap justify-center">
            <div className="flex flex-col items-center p-2  w-1/3 mt-20"> 
                <img className="border-2 border-orange-500 mb-4 w-full lg:w-1/3" src={gm2v1} alt="Code Image" />
                <div className="grid grid-cols-2 gap-4">
                    <img className="border-2 border-orange-500 w-full" src={gm2v2} alt="Code Image" />
                    <img className="border-2 border-orange-500 w-full" src={gm2v3} alt="Code Image" />
                </div>
            </div>
            <div className="pt-5 w-full lg:w-1/2 text-center">
                <h3 className="flex mb-2 text-2xl justify-center ml-5 mt-7">
                    Saudi Car Simulator Game
                </h3>
                <p className="text-md text-neutral-500 ml-5">
                    Saudi Car Drift Simulator 2021-22
                    Featuring over 20 cars to choose from, Drive or Drift in the Cities & Highways with Realistic Car Physics & Engine Sounds.               
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Total installs: 100,000+
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Current version: v3
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Last updated: Mar 31, 2024
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Original Release: Sep 25, 2021
                </p>
                <div className="flex justify-center my-10">
                    <a href="https://play.google.com/store/apps/details?id=com.PoliceProtocol.SaudiCarSimulator" target="_blank" rel="noopener noreferrer"  className="bg-gradient-to-r from bg-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:bg-orange-600 hover:to-orange-900 hover:text-white">
                        Play now
                    </a>
                    
                </div>
            </div>
        </div>

        <hr className="my-10 w-full border-t-2 border-gray-800" />

        

        <div className="flex flex-wrap justify-center">
            <div className="flex flex-col items-center p-2  w-1/3 mt-20"> 
                <img className="border-2 border-orange-500 mb-4 w-full lg:w-1/3" src={gm3v1} alt="Code Image" />
                <div className="grid grid-cols-2 gap-4">
                    <img className="border-2 border-orange-500 w-full" src={gm3v2} alt="Code Image" />
                    <img className="border-2 border-orange-500 w-full" src={gm3v3} alt="Code Image" />
                </div>
            </div>
            <div className="pt-5 w-full lg:w-1/2 text-center">
                <h3 className="flex mb-2 text-2xl justify-center ml-5 mt-7">
                    Toyota Drift Simulator 2021
                </h3>
                <p className="text-md text-neutral-500 ml-5">
                    Toyota City Drift Simulator 2021-22:
                    Experience the thrill of drifting with over 30 cars on city streets and highways, featuring realistic car physics and engine sounds.                
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Total installs: 500,000+
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Current version: v5
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Last updated: Aug 16, 2023
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Original Release: Aug 10, 2021
                </p>
                <div className="flex justify-center my-10">
                    <a href="https://play.google.com/store/apps/details?id=com.PoliceProtocol.ToyotaCarSimulator2021" target="_blank" rel="noopener noreferrer"  className="bg-gradient-to-r from bg-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:bg-orange-600 hover:to-orange-900 hover:text-white">
                        Play now
                    </a>
                    
                </div>
            </div>
        </div>

        <hr className="my-10 w-full border-t-2 border-gray-800" />

        

        <div className="flex flex-wrap justify-center">
            <div className="flex flex-col items-center p-2  w-1/3 mt-20"> 
                <img className="border-2 border-orange-500 mb-4 w-full lg:w-1/3" src={gm4v1} alt="Code Image" />
                <div className="grid grid-cols-2 gap-4">
                    <img className="border-2 border-orange-500 w-full" src={gm4v2} alt="Code Image" />
                    <img className="border-2 border-orange-500 w-full" src={gm4v3} alt="Code Image" />
                </div>
            </div>
            <div className="pt-5 w-full lg:w-1/2 text-center">
                <h3 className="flex mb-2 text-2xl justify-center ml-5 mt-7">
                    Corolla Car Game Simulator
                </h3>
                <p className="text-md text-neutral-500 ml-5">
                    Choose your Corolla, drive or drift through city streets and highways, with realistic car physics and engine sounds.               
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Total installs: 100,000+
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Current version: ver 2
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Last updated: Aug 20, 2023
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Original Release: Oct 23, 2021
                </p>
                <div className="flex justify-center my-10">
                    <a href="https://play.google.com/store/apps/details?id=com.PoliceProtocol.ToyotaCorollaCarGameProtocolSimulation" target="_blank" rel="noopener noreferrer"  className="bg-gradient-to-r from bg-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:bg-orange-600 hover:to-orange-900 hover:text-white">
                        Play now
                    </a>
                    
                </div>
            </div>
        </div>

        <hr className="my-10 w-full border-t-2 border-gray-800" />

        

        <div className="flex flex-wrap justify-center">
            <div className="flex flex-col items-center p-2  w-1/3 mt-20"> 
                <img className="border-2 border-orange-500 mb-4 w-full lg:w-1/3" src={gm5v1} alt="Code Image" />
                <div className="grid grid-cols-2 gap-4">
                    <img className="border-2 border-orange-500 w-full" src={gm5v2} alt="Code Image" />
                    <img className="border-2 border-orange-500 w-full" src={gm5v3} alt="Code Image" />
                </div>
            </div>
            <div className="pt-5 w-full lg:w-1/2 text-center">
                <h3 className="flex mb-2 text-2xl justify-center ml-5 mt-7">
                    Revo Hilux Car Game Simulator
                </h3>
                <p className="text-md text-neutral-500 ml-5">
                    Select your Revo Hilux and experience thrilling drives or drifts on city streets and highways, with authentic car physics and engine sounds.               
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Total installs: 100,000+
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Current version: v2
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Last updated: Aug 17, 2023
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Original Release: Oct 25, 2021
                </p>
                <div className="flex justify-center my-10">
                    <a href="https://play.google.com/store/apps/details?id=com.PoliceProtocol.HiluxRevoCarGameProtocolSimulation" target="_blank" rel="noopener noreferrer"  className="bg-gradient-to-r from bg-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:bg-orange-600 hover:to-orange-900 hover:text-white">
                        Play now
                    </a>
                    
                </div>
            </div>
        </div>

        <hr className="my-10 w-full border-t-2 border-gray-800" />

        

        <div className="flex flex-wrap justify-center">
            <div className="flex flex-col items-center p-2  w-1/3 mt-20"> 
                <img className="border-2 border-orange-500 mb-4 w-full lg:w-1/3" src={gm6v1} alt="Code Image" />
                <div className="grid grid-cols-2 gap-4">
                    <img className="border-2 border-orange-500 w-full" src={gm6v2} alt="Code Image" />
                    <img className="border-2 border-orange-500 w-full" src={gm6v3} alt="Code Image" />
                </div>
            </div>
            <div className="pt-5 w-full lg:w-1/2 text-center">
                <h3 className="flex mb-2 text-2xl justify-center ml-5 mt-7">
                    Pakistan Car Simulator Game
                </h3>
                <p className="text-md text-neutral-500 ml-5">
                    Explore the streets and highways with over 20 cars, offering dynamic driving and drifting experiences, complete with realistic physics and engine sounds.             
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Total installs: 500,000+
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Current version: v2
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Last updated: Aug 16, 2023
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Original Release: Sep 20, 2021
                </p>
                <div className="flex justify-center my-10">
                    <a href="https://play.google.com/store/apps/details?id=com.PoliceProtocol.PakistaniCarSimGame2022" target="_blank" rel="noopener noreferrer"  className="bg-gradient-to-r from bg-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:bg-orange-600 hover:to-orange-900 hover:text-white">
                        Play now
                    </a>
                    
                </div>
            </div>
        </div>

        <hr className="my-10 w-full border-t-2 border-gray-800" />

        

        <div className="flex flex-wrap justify-center">
            <div className="flex flex-col items-center p-2  w-1/3 mt-20"> 
                <img className="border-2 border-orange-500 mb-4 w-full lg:w-1/3" src={gm7v1} alt="Code Image" />
                <div className="grid grid-cols-2 gap-4">
                    <img className="border-2 border-orange-500 w-full" src={gm7v2} alt="Code Image" />
                    <img className="border-2 border-orange-500 w-full" src={gm7v3} alt="Code Image" />
                </div>
            </div>
            <div className="pt-5 w-full lg:w-1/2 text-center">
                <h3 className="flex mb-2 text-2xl justify-center ml-5 mt-7">
                    Suzuki Car Simulator Game
                </h3>
                <p className="text-md text-neutral-500 ml-5">
                    Drive or drift popular Suzuki models through city streets and highways, featuring true-to-life car physics and engine sounds.              
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Total installs: 500,000+
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Current version: v8
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Last updated: Aug 20, 2023
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Original Release: Aug 13, 2021
                </p>
                <div className="flex justify-center my-10">
                    <a href="https://play.google.com/store/apps/details?id=com.PoliceProtocol.SuzukiCarSimulatorGame" target="_blank" rel="noopener noreferrer"  className="bg-gradient-to-r from bg-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:bg-orange-600 hover:to-orange-900 hover:text-white">
                        Play now
                    </a>
                    
                </div>
            </div>
        </div>

        <hr className="my-10 w-full border-t-2 border-gray-800" />

        

        <div className="flex flex-wrap justify-center">
            <div className="flex flex-col items-center p-2  w-1/3 mt-20"> 
                <img className="border-2 border-orange-500 mb-4 w-full lg:w-1/3" src={gm8v1} alt="Code Image" />
                <div className="grid grid-cols-2 gap-4">
                    <img className="border-2 border-orange-500 w-full" src={gm8v2} alt="Code Image" />
                    <img className="border-2 border-orange-500 w-full" src={gm8v3} alt="Code Image" />
                </div>
            </div>
            <div className="pt-5 w-full lg:w-1/2 text-center">
                <h3 className="flex mb-2 text-2xl justify-center ml-5 mt-7">
                    Honda Civic Car Game
                </h3>
                <p className="text-md text-neutral-500 ml-5">
                    Choose from a range of Honda Civics and experience driving or drifting through city streets and highways, with realistic car physics and engine sounds.               
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Total installs: 100,000+
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Current version: v2
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Last updated: Aug 20, 2023
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Original Release: Oct 23, 2021
                </p>
                <div className="flex justify-center my-10">
                    <a href="https://play.google.com/store/apps/details?id=com.PoliceProtocol.HondaCivicCarGameProtocolSimulation" target="_blank" rel="noopener noreferrer"  className="bg-gradient-to-r from bg-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:bg-orange-600 hover:to-orange-900 hover:text-white">
                        Play now
                    </a>
                    
                </div>
            </div>
        </div>

        <hr className="my-10 w-full border-t-2 border-gray-800" />

        

        <div className="flex flex-wrap justify-center">
            <div className="flex flex-col items-center p-2  w-1/3 mt-20"> 
                <img className="border-2 border-orange-500 mb-4 w-full lg:w-1/3" src={gm9v1} alt="Code Image" />
                <div className="grid grid-cols-2 gap-4">
                    <img className="border-2 border-orange-500 w-full" src={gm9v2} alt="Code Image" />
                    <img className="border-2 border-orange-500 w-full" src={gm9v3} alt="Code Image" />
                </div>
            </div>
            <div className="pt-5 w-full lg:w-1/2 text-center">
                <h3 className="flex mb-2 text-2xl justify-center ml-5 mt-7">
                    Fortuner Car Game Simulation
                </h3>
                <p className="text-md text-neutral-500 ml-5">
                    Take the wheel of luxury cars, driving or drifting through city streets and highways with realistic car physics and engine sounds.               
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Total installs: 100,000+
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Current version: v2
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Last updated: Aug 20, 2023
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Original Release: Oct 21, 2021
                </p>
                <div className="flex justify-center my-10">
                    <a href="https://play.google.com/store/apps/details?id=com.PoliceProtocol.FortunerCarGameProtocolSimulation" target="_blank" rel="noopener noreferrer"  className="bg-gradient-to-r from bg-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:bg-orange-600 hover:to-orange-900 hover:text-white">
                        Play now
                    </a>
                    
                </div>
            </div>
        </div>

        <hr className="my-10 w-full border-t-2 border-gray-800" />

        

        <div className="flex flex-wrap justify-center">
            <div className="flex flex-col items-center p-2  w-1/3 mt-20"> 
                <img className="border-2 border-orange-500 mb-4 w-full lg:w-1/3" src={gm10v1} alt="Code Image" />
                <div className="grid grid-cols-2 gap-4">
                    <img className="border-2 border-orange-500 w-full" src={gm10v2} alt="Code Image" />
                    <img className="border-2 border-orange-500 w-full" src={gm10v3} alt="Code Image" />
                </div>
            </div>
            <div className="pt-5 w-full lg:w-1/2 text-center">
                <h3 className="flex mb-2 text-2xl justify-center ml-5 mt-7">
                    India Super Cars Game
                </h3>
                <p className="text-md text-neutral-500 ml-5">
                    Drive or drift the most exotic luxury and sports cars of India on city streets and highways, with authentic car physics and engine sounds.             
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Total installs: 100,000+
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Current version: v2
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Last updated: Aug 17, 2023
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Original Release: Oct 17, 2021
                </p>
                <div className="flex justify-center my-10">
                    <a href="https://play.google.com/store/apps/details?id=com.PoliceProtocol.SportsIndiaCarGame" target="_blank" rel="noopener noreferrer"  className="bg-gradient-to-r from bg-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:bg-orange-600 hover:to-orange-900 hover:text-white">
                        Play now
                    </a>
                    
                </div>
            </div>
        </div>

        <hr className="my-10 w-full border-t-2 border-gray-800" />

        

        <div className="flex flex-wrap justify-center">
            <div className="flex flex-col items-center p-2  w-1/3 mt-20"> 
                <img className="border-2 border-orange-500 mb-4 w-full lg:w-1/3" src={gm11v1} alt="Code Image" />
                <div className="grid grid-cols-2 gap-4">
                    <img className="border-2 border-orange-500 w-full" src={gm11v2} alt="Code Image" />
                    <img className="border-2 border-orange-500 w-full" src={gm11v3} alt="Code Image" />
                </div>
            </div>
            <div className="pt-5 w-full lg:w-1/2 text-center">
                <h3 className="flex mb-2 text-2xl justify-center ml-5 mt-7">
                    Tesla Car Game
                </h3>
                <p className="text-md text-neutral-500 ml-5">
                    Select from a full range of Tesla models and experience driving or drifting through city streets and highways, with lifelike car physics and engine sounds.            
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Total installs: 100,000+
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Current version: v6
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Last updated: Aug 17, 2023
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Original Release: Oct 23, 2021
                </p>
                <div className="flex justify-center my-10">
                    <a href="https://play.google.com/store/apps/details?id=com.PoliceProtocol.TeslaCityDriveGameProtocolSimulation" target="_blank" rel="noopener noreferrer"  className="bg-gradient-to-r from bg-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:bg-orange-600 hover:to-orange-900 hover:text-white">
                        Play now
                    </a>
                    
                </div>
            </div>
        </div>

        <hr className="my-10 w-full border-t-2 border-gray-800" />

        

        <div className="flex flex-wrap justify-center">
            <div className="flex flex-col items-center p-2  w-1/3 mt-20"> 
                <img className="border-2 border-orange-500 mb-4 w-full lg:w-1/3" src={gm12v1} alt="Code Image" />
                <div className="grid grid-cols-2 gap-4">
                    <img className="border-2 border-orange-500 w-full" src={gm12v2} alt="Code Image" />
                    <img className="border-2 border-orange-500 w-full" src={gm12v3} alt="Code Image" />
                </div>
            </div>
            <div className="pt-5 w-full lg:w-1/2 text-center">
                <h3 className="flex mb-2 text-2xl justify-center ml-5 mt-7">
                    German Car Simulator Game
                </h3>
                <p className="text-md text-neutral-500 ml-5">
                    Choose from over 20 German cars and enjoy driving or drifting on city streets and highways, with realistic car physics and engine sounds.                
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Total installs: 10,000+
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Current version: v2
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Last updated: Aug 20, 2023
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Original Release: Sep 16, 2021
                </p>
                <div className="flex justify-center my-10">
                    <a href="https://play.google.com/store/apps/details?id=com.PoliceProtocol.GermanCarSimulators2022" target="_blank" rel="noopener noreferrer"  className="bg-gradient-to-r from bg-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:bg-orange-600 hover:to-orange-900 hover:text-white">
                        Play now
                    </a>
                    
                </div>
            </div>
        </div>

        <hr className="my-10 w-full border-t-2 border-gray-800" />

        

        <div className="flex flex-wrap justify-center">
            <div className="flex flex-col items-center p-2  w-1/3 mt-20"> 
                <img className="border-2 border-orange-500 mb-4 w-full lg:w-1/3" src={gm13v1} alt="Code Image" />
                <div className="grid grid-cols-2 gap-4">
                    <img className="border-2 border-orange-500 w-full" src={gm13v2} alt="Code Image" />
                    <img className="border-2 border-orange-500 w-full" src={gm13v3} alt="Code Image" />
                </div>
            </div>
            <div className="pt-5 w-full lg:w-1/2 text-center">
                <h3 className="flex mb-2 text-2xl justify-center ml-5 mt-7">
                    Japan Car Simulator Game
                </h3>
                <p className="text-md text-neutral-500 ml-5">
                    Drift or drive over 20 Japanese cars through city streets and highways, featuring realistic car physics and engine sounds.              
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Total installs: 10,000+
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Current version: ver 2
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Last updated: Aug 20, 2023
                </p>
                <p className="text-md text-neutral-500 ml-5 mt-3">
                     Original Release: Sep 22, 2021
                </p>
                <div className="flex justify-center my-10">
                    <a href="https://play.google.com/store/apps/details?id=com.PoliceProtocol.JapanCarSimulatorGame2022" target="_blank" rel="noopener noreferrer"  className="bg-gradient-to-r from bg-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:bg-orange-600 hover:to-orange-900 hover:text-white">
                        Play now
                    </a>
                    
                </div>
            </div>
        </div>

        

        <footer className="w-full  text-white mt-10 border-t py-10 border-neutral-700">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 px-6">
                <div>
                    <h3 className="text-md font-semibold mb-4 ">
                        Resources
                    </h3>
                    <ul className="space-y-2">
                        {resourcesLinks.map((link, index) => (
                            <li key={index}>
                                <a className="text-neutral-400 hover:text-white" href={link.href} target="_blank" rel="noopener noreferrer" >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            
            </div>
        </footer>


    </div>

    


  );
}

export default PublishedGamesHeroSection

/*
 <div className="p-2 w-full lg:w-1/4 mt-10"> 
                <img className="border-4 border-orange-500" src={codeImg} alt="Code Image" />
 </div>
*/