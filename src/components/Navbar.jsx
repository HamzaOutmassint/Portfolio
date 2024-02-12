import { useState } from "react";
import {
  HouseDoor,
  Person,
  MenuButton,
  Diagram3,
  FileText,
  Envelope,
  List
} from "react-bootstrap-icons";

export const Navbar = ({ activeSection , scrollToSection }) => {
  const[open,setOpen]=useState(false)
  return (
    <>
      <nav className="hidden lg:flex fixed top-44 right-52 items-center exactly-1024:right-36">
        <ul className="border-1 border-second-color rounded-full h-64 flex flex-col justify-between px-3 py-5">
          <li className="group flex relative">
            <button onClick={() => scrollToSection('home')} >
              <HouseDoor
                size={21}
                className={
                  activeSection === "home"
                    ? "text-main-color"
                    : "text-fourth-color hover:text-main-color transition duration-200 ease-linear"
                }
              />
              <span className="hidden group-hover:block absolute left-[-480%] top-1/2 transform -translate-y-1/2 bg-therd-color font-second-font text-sm text-white px-2 py-1 rounded">
                Home
              </span>
            </button>
          </li>
          <li className="group flex relative">
            <button onClick={() => scrollToSection('about-me-section')} >
              <Person
                size={23}
                className={
                  activeSection === "about-me-section"
                    ? "text-main-color transition duration-200 ease-linear"
                    : "text-fourth-color hover:text-main-color transition duration-200 ease-linear"
                }
              />
              <span className="hidden group-hover:block absolute left-[-480%] top-1/2 transform -translate-y-1/2 bg-therd-color font-second-font text-sm text-white px-2 py-1 rounded">
                About
              </span>
            </button>
          </li>
          <li className="group flex relative">
            <button onClick={() => scrollToSection('about-me-section')} >
              <MenuButton
                size={20}
                className={
                  activeSection === "services-section"
                    ? "text-main-color transition duration-200 ease-linear"
                    : "text-fourth-color hover:text-main-color transition duration-200 ease-linear"
                }
              />
              <span className="hidden group-hover:block absolute left-[-560%] top-1/2 transform -translate-y-1/2 bg-therd-color font-second-font text-sm text-white px-2 py-1 rounded">
                Services
              </span>
            </button>
          </li>
          <li className="group flex relative">
            <button onClick={() => scrollToSection('about-me-section')} >
              <Diagram3
                size={22}
                className={
                  activeSection === "skills-section"
                    ? "text-main-color transition duration-200 ease-linear"
                    : "text-fourth-color hover:text-main-color transition duration-200 ease-linear"
                }
              />
              <span className="hidden group-hover:block absolute left-[-450%] top-1/2 transform -translate-y-1/2 bg-therd-color font-second-font text-sm text-white px-2 py-1 rounded">
                Skills
              </span>
            </button>
          </li>
          <li className="group flex relative">
            <button onClick={() => scrollToSection('about-me-section')} >
              <FileText
                size={21}
                className={
                  activeSection === "project-section"
                    ? "text-main-color transition duration-200 ease-linear"
                    : "text-fourth-color hover:text-main-color transition duration-200 ease-linear"
                }
              />
              <span className="hidden group-hover:block absolute left-[-550%] top-1/2 transform -translate-y-1/2 bg-therd-color font-second-font text-sm text-white px-2 py-1 rounded">
                Portfolio
              </span>
            </button>
          </li>
          <li className="group flex relative">
            <button onClick={() => scrollToSection('about-me-section')} >
              <Envelope
                size={20}
                className={
                  activeSection === "contact-section"
                    ? "text-main-color transition duration-200 ease-linear"
                    : "text-fourth-color hover:text-main-color transition duration-200 ease-linear"
                }
              />
              <span className="hidden group-hover:block absolute left-[-520%] top-1/2 transform -translate-y-1/2 bg-therd-color font-second-font text-sm text-white px-2 py-1 rounded">
                Contact
              </span>
            </button>
          </li>
        </ul>
      </nav>
      <nav className="lg:hidden sm:flex justify-end relative top-10">
          <button  onClick={()=>{setOpen(!open)}} className="border-1 rounded-full">
                <List size={50} className="p-3"/>
          </button>
          <div  onClick={()=>{setOpen(!open)}} className={`fixed inset-0 bg-fifth-color opacity-20 duration-0 transition z-10 ${open == true ? "translate-x-0" : "translate-x-full" }`}>
          </div>
          <div className={`fixed inset-0 flex  bg-[#1f1f1f] duration-700 transition z-40 font-second-font text-fifth-color ${open==true?"sm:translate-x-16 md:translate-x-1/2":"translate-x-full"}`}>
            {/* <button  onClick={()=>{setOpen(!open)}} className="border-1 rounded-full">
                <List size={50} className="p-3"/>
            </button> */}
            <ul className="mt-16 ml-24">
              <li className="text-lg mb-8">Menu</li>
              <li>home</li>
              <li>about</li>
              <li>skills</li>
              <li>contact</li>
            </ul>
          </div>
      </nav>
    </>
  );
};
