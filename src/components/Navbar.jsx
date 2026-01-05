import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-black text-white italic">
            I
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">
            IAISP <span className="text-indigo-500 text-sm font-medium">GLOBAL</span>
          </span>
        </div>

        {/* Navigation - AWS Style Pathing */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-white transition-colors">Certifications</a>
          <a href="#" className="hover:text-white transition-colors">Training</a>
          <a href="#" className="hover:text-white transition-colors">Membership</a>
          <a href="#" className="hover:text-white transition-colors">Governance</a>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button className="text-slate-300 hover:text-white text-sm font-medium">Log In</button>
          <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-indigo-500/20">
            Join Association
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;