"use client";
import React from "react";
import { useState } from "react";
import { HiMenu, HiX } from 'react-icons/hi';


export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className=" fixed top-0 left-0 z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 backdrop-blur mb-3" style={{background: 'rgba(0,0,0,0.7)'}}>
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-xl p-1 font-bold leading-relaxed inline-block mr-4 whitespace-nowrap text-white"
              href="#home"
            >
              &lt;alusia/&gt;
            </a>
            <button
              className="text-white cursor-pointer text-3xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 flex items-center text-lg leading-snug text-white hover:opacity-75"
                  href="#about"
                >
                  &lt;about/&gt;
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 flex items-center text-lg leading-snug text-white hover:opacity-75"
                  href="#projects"
                >
                  &lt;projects/&gt;
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 flex items-center text-lg leading-snug text-white hover:opacity-75"
                  href="#activities"
                >
                  &lt;achievements & activities/&gt;
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 flex items-center text-lg leading-snug text-white hover:opacity-75"
                  href="#contact"
                >
                  &lt;contact/&gt;
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}