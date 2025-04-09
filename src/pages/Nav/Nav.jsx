// import moment from 'moment';
import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/all-news', label: 'All News' },
    { path: '/breaking', label: 'Breaking News' },
    { path: '/regular', label: 'Regular News' },
    { path: '/international', label: 'International' },
    { path: '/sports', label: 'Sports' },
    { path: '/entertainment', label: 'Entertainment' },


  ];

  return (
    <nav className="w-full fixed z-50 top-0 bg-white shadow py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="flex justify-between items-center h-16 ">
          {/* Logo Section */}
          <div className=" flex flex-col justify-between items-center  text-center font-mono lg:text-4xl text-2xl font-bold space-y-1 ">
            <Link to="/">
              <span className="text-purple-600  ">News</span> Portal
            </Link>
            {/* <p className='text-base  font-thin'>Journalism Without Fear or Favour</p> */}
            {/* <p className='text-base font-thin'>{moment().format("dddd, MMMM D, YYYY")}</p> */}
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 lg:flex justify-center items-center  ">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="text-gray-800 text-base hover:text-purple-600 transition-colors duration-200 pr-[1px] font-semibold"
              >
                {label}
              </Link>
            ))}

            <Link

              to="/search"
              className="text-gray-800 text-base hover:text-purple-600 transition-colors duration-200 border-l-[1px] border-gray-500 pl-4 font-semibold"
            >
             <div className='flex justify-center items-center gap-1'>
             <span><IoMdSearch className='h-7 w-7' ></IoMdSearch></span>search
             </div>
            </Link>


            <Link

              to="/login"
              className="text-gray-800 text-base hover:text-purple-600 transition-colors duration-200 border-l-[1px] border-gray-500 pl-4 font-semibold"
            >
              login
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-800 hover:text-purple-600 focus:outline-none"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 18h16" />
                  </>
                )}
              </svg>

              {/*  <RxHamburgerMenu className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"></RxHamburgerMenu> */}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white shadow">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className="block text-gray-800 text-base hover:text-purple-600 transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
