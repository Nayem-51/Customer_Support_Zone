import React, { useState } from 'react';
import { Menu,X } from 'lucide-react';

const Navbar=()=>{
  const [active, setActive]=useState(null);
  const [menuOpen, setMenuOpen]=useState(false);

  const navItems=["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"];

  return(
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center w-full">
          <div className="flex-shrink-0 text-lg sm:text-xl font-bold text-gray-800">
            CS — Ticket System
          </div>
          <div className="flex items-center ml-auto space-x-4">
            <div className="hidden md:flex space-x-4">
              {navItems.map(item => (
                <button
                  key={item}
                  onClick={() => setActive(item)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${active === item ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium shadow-md transition duration-200">
              + New Ticket
            </button>

            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="flex flex-col space-y-1 px-2 py-3">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => { setActive(item); setMenuOpen(false); }}
                className={`block text-left px-3 py-2 rounded-md text-sm font-medium`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
