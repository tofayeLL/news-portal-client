import React, { useState } from 'react';
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-4xl font-bold font-mono">
            <Link to="/">
              <span className="text-purple-600">News</span> Portal
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="text-gray-800 text-base hover:text-purple-600 transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-800 hover:text-purple-600 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                )}
              </svg>
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
