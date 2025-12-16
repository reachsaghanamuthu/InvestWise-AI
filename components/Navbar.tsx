import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  const navLinks = [
    { name: 'Investment Basics', path: '/education/basics' },
    { name: 'Types of Investments', path: '/education/types' },
    { name: 'Trending Investments', path: '/education/trending' },
    { name: 'Stock Market Guide', path: '/education/guide' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <div className="bg-navy-900 dark:bg-slate-800 p-2.5 rounded-xl shadow-lg shadow-navy-900/20 dark:shadow-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <span className="text-xl font-bold text-navy-900 dark:text-white tracking-tight">InvestWise AI</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Learn Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-slate-600 dark:text-slate-300 hover:text-navy-900 dark:hover:text-white font-medium transition-colors py-2"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <span>Learn</span>
                <svg className="ml-1.5 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              {isDropdownOpen && (
                <div 
                  className="absolute top-full right-0 pt-2 w-64 animate-fade-in"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 py-3 overflow-hidden">
                    {navLinks.map((link) => (
                      <Link 
                        key={link.path}
                        to={link.path}
                        className="block px-5 py-3 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action Group */}
            <div className="flex items-center space-x-6">
              
              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'light' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </button>

              <Link 
                to="/advisor" 
                className="bg-navy-900 hover:bg-navy-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all shadow-lg shadow-navy-900/20 dark:shadow-emerald-600/20 flex items-center space-x-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400 dark:text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span>Get Started</span>
              </Link>

              <div className="h-6 w-px bg-slate-200 dark:bg-slate-700"></div>

              <div className="flex items-center space-x-4">
                <Link to="/auth" className="text-slate-600 dark:text-slate-300 hover:text-navy-900 dark:hover:text-white font-semibold text-sm flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Login
                </Link>
                <Link 
                  to="/auth" 
                  className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-navy-900 dark:text-white border border-slate-200 dark:border-slate-700 px-5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-sm flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Sign Up
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
             {/* Mobile Theme Toggle */}
             <button 
                onClick={toggleTheme}
                className="p-2 rounded-lg text-slate-500 dark:text-slate-400"
              >
                {theme === 'light' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </button>

            <button onClick={toggleMenu} className="text-navy-900 dark:text-white hover:text-emerald-600 focus:outline-none bg-slate-100 dark:bg-slate-800 p-2 rounded-lg">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shadow-xl absolute w-full left-0 z-50">
          <div className="px-4 py-6 space-y-4">
             <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Learn</div>
             <div className="grid grid-cols-1 gap-2 pl-2 border-l-2 border-slate-100 dark:border-slate-800">
               {navLinks.map((link) => (
                  <Link 
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className="block px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-navy-900 dark:hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
             </div>
              
              <div className="pt-4 space-y-3">
                <Link 
                  to="/advisor" 
                  onClick={closeMenu}
                  className="block w-full text-center bg-navy-900 dark:bg-emerald-600 text-white px-4 py-3 rounded-lg font-bold shadow-lg shadow-navy-900/20"
                >
                  Get Started
                </Link>
                <div className="grid grid-cols-2 gap-3">
                   <Link 
                    to="/auth" 
                    onClick={closeMenu}
                    className="flex items-center justify-center bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-4 py-3 rounded-lg font-semibold hover:bg-slate-100 dark:hover:bg-slate-700"
                  >
                    Login
                  </Link>
                  <Link 
                    to="/auth" 
                    onClick={closeMenu}
                    className="flex items-center justify-center border border-slate-200 dark:border-slate-700 text-navy-900 dark:text-white px-4 py-3 rounded-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;