import React, { useState } from 'react';
import Menu from '../image/menu.png';
import Mobil from './Mobil';
import { Link } from 'react-router-dom';


const DeksTopNav = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    let closeTimeout;
  
    const handleMouseEnter = (dropdownId) => {
      clearTimeout(closeTimeout); // Clear any existing timeout
      setOpenDropdown(dropdownId);
    };
  
    const handleMouseLeave = () => {
      closeTimeout = setTimeout(() => {
        setOpenDropdown(null);
      }, 500); // Adjust the time (in milliseconds) before the dropdown closes
    };
  
    const isDropdownOpen = (dropdownId) => {
      return openDropdown === dropdownId;
    };


    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

  return (
    <div>
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <p className="text-white text-4xl uppercase">
              <span className="text-white">Syne</span>
              <span className="text-gray-200">rgic</span>
            </p>
          </div>
          <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-center">
            <div className="hidden sm:ml-6 lg:block">
              <div className="flex space-x-4">
                <ul className="flex items-center justify-center gap-16">
                  <li
                    className="relative group"
                   
                  >
                    <span
                      
                      className="text-white my-3 hover:text-yellow-200 hover:transition-opacity transition-all uppercase duration-300 ease-in-out hover:border-b-2 border-b-transparent group-hover:border-b-white py-3 
                    "
                    >
                     <Link to="/">Home</Link>
                    </span>
                  </li>
                  <li
                    className="relative group uppercase"
                    onMouseEnter={() => handleMouseEnter('dropdown-menu-1')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span
                      
                      className={`text-white my-3 hover:text-yellow-200 hover:transition-opacity transition-all uppercase duration-300 ease-in-out hover:border-b-2 border-b-transparent group-hover:border-b-white py-3 ${
                        isDropdownOpen('dropdown-menu-1') ? 'text-blue-600' : ''
                      }`}
                    >
                      About Us
                    </span>
                    <div
                      id="dropdown-menu-1"
                      className={`${
                        isDropdownOpen('dropdown-menu-1')
                          ? 'block'
                          : 'hidden'
                      } absolute top-[3.5rem] right-0 mt-2 py-2 border rounded-lg shadow-lg dropdown bg-black w-[15rem] transform -translate-x-1/2 left-1/2`}
                      onMouseEnter={() => handleMouseEnter('dropdown-menu-1')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <ul className="text-white p-4 border-b-slate-200 rounded-xl   my-2 divide-y group-hover:border-b-blue-700">
                        <li className="my-2 hover:text-green-600 hover:text-lg py-2">
                     
                          <Link to="/ceo">Ceo & Managing Director</Link>

                        </li>
                        <li className="my-2  py-2 hover:text-green-600 hover:text-lg">
                        <Link to="/enrolment">Enrolment & Membership</Link>

                        </li>
                        <li className="my-2  py-2 hover:text-green-600 hover:text-lg">
                        <Link to="/mission">Mission & Vission</Link>
                        </li>
                        <li className="my-2  py-2 hover:text-green-600 hover:text-lg">
                        <Link to="/companyIn">Company Intruduction</Link>
                        </li>
                        <li className="my-2  py-2 hover:text-green-600 hover:text-lg">
                        <Link to="/organ">Organogram</Link>
                        </li>
                        <li className="my-2 py-2 hover:text-green-600 hover:text-lg">
                        <Link to="/success">Success Storis</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    className="relative group uppercase"
                    onMouseEnter={() => handleMouseEnter('dropdown-menu-3')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span
                      href="#"
                      className={`text-white my-3 hover:text-yellow-200 hover:transition-opacity transition-all uppercase duration-300 ease-in-out hover:border-b-2 border-b-transparent group-hover:border-b-white py-3 ${
                        isDropdownOpen('dropdown-menu-3') ? 'text-blue-600' : ''
                      }`}
                    >
                      Products
                    </span>
                    <div
                      id="dropdown-menu-2"
                      className={`${
                        isDropdownOpen('dropdown-menu-3')
                          ? 'block'
                          : 'hidden'
                      } absolute top-[3.5rem] right-0 mt-2 py-2 border rounded-lg shadow-lg dropdown ml-[50px] bg-black w-[10rem] transform -translate-x-1/2 left-1/2`}
                      onMouseEnter={() => handleMouseEnter('dropdown-menu-3')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <ul className="text-white p-4 border-b-slate-200 rounded-xl   my-2 divide-y group-hover:border-b-blue-700">
                      <li className="my-2  py-2 hover:text-green-600 hover:text-lg">
                        <Link to="/fruit">Fruit</Link>
                        </li>
                        <li className="my-2  py-2 hover:text-green-600 hover:text-lg">
                        <Link to="/fish"> Fish</Link>
                        </li>
                        <li className="my-2  py-2 hover:text-green-600 hover:text-lg">
                        <Link to="/vegetable">Vegetable</Link>
                        </li>
                        <li className="my-2  py-2 hover:text-green-600 hover:text-lg">
                       <Link to="/driedfish">Dride Fish</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    className="relative group uppercase"
                    onMouseEnter={() => handleMouseEnter('dropdown-menu-4')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span
                    
                      className={`text-white my-3 hover:text-yellow-200 hover:transition-opacity transition-all uppercase duration-300 ease-in-out hover:border-b-2 border-b-transparent group-hover:border-b-white py-3 ${
                        isDropdownOpen('dropdown-menu-5') ? 'text-blue-600' : ''
                      }`}
                    >
                   <Link to="/service">Services</Link>
                    </span>
                  </li>
                  <li className="relative group">
                    <span
                  
                      className={`text-white my-3 hover:text-yellow-200 hover:transition-opacity transition-all uppercase duration-300 ease-in-out hover:border-b-2 border-b-transparent group-hover:border-b-white py-3 ${
                        isDropdownOpen('dropdown-menu-5') ? 'text-blue-600' : ''
                      }`}
                    >
                    <Link to="/contact">Contact</Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div className="flex items-center gap-3">
                <ul className="flex gap-4 justify-center items-center text-white text-lg font-thin">
                  <li className="py-2 text-gray-300 text-3xl my-2  px-2 w-full rounded-lg">
                  <i className="fa fa-search"></i>

                  </li>
                  <li className="py-2 text-gray-300 text-3xl my-2  px-2 w-full rounded-lg">
                  <i className="fa fa-user" aria-hidden="true"></i>

                  </li>
                </ul>
                <button
        type="button"
        onClick={toggleMobileMenu}
        className="relative inline-flex items-center justify-center lg:hidden rounded-md p-2 text-gray-400 hover:bg-white hover:animate-pulse hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus-ring-white"
        aria-controls="mobile-menu"
        aria-expanded={isMobileMenuOpen}
      >
        <span className="absolute -inset-0.5"></span>
        <img src={Menu} alt="" />
      </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden z-50" id="mobile-menu">
          <Mobil />
        </div>
      )}
    
    </div>
  );
};

export default DeksTopNav;
