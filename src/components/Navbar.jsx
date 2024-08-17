import { Menu, X} from "lucide-react"
import { useState } from "react";
{/*The above two imports are for the control menu for display on mobile */}

import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

        const toggleNavbar = () => {
            setMobileDrawerOpen(!mobileDrawerOpen);

        }
    {/*The above two commands are for toggeling mobile view */}

  return (
   <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
    <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
                {/*This part is for the Logo and title that will display at the top left of the webpage */}
                <img className="h-10 w-10 mr-2" src={logo} alt="Studio Logo" />
                <span className="text-xl tracking-tight">Protocol Studio</span> 
            </div>
            {/*This part is for the quick link navigation bar at the top of the webpage */}
            <ul className="hidden lg:flex ml-14 space-x-12">
                {/*Importing nav items from the constants folder index.jsx */}
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))
                
                }
            </ul>
            {/*This part is for the log in and create an account page */}
            <div className="hidden lg:flex justify-center space-x-12 items-center">
                <a href="#" className="py-2 px-3 border rounded-md">
                    Sign In
                </a>
                <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
                    Create an account
                </a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
                {/*This part is for toggling the nav bar and being able to close it in mobile */}
                <button onClick={toggleNavbar}>
                    {mobileDrawerOpen ? <X /> : <Menu />}
                </button>
            </div>
        </div>
        {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index} className="py-4 ">
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="flex space-x-6">
                    <a href="#" className="py-2 px-3 border rounded-md">
                        Sign In
                    </a>
                    <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
                        Create an account
                    </a>
                </div>
            </div>
        )}
    </div>
   </nav>
  )
}

export default Navbar
