
import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext.jsx';
import { SearchContext } from '../context/SearchContext.jsx';

export default function Header(){
  const { theme, toggle, isDark } = useContext(ThemeContext);
  const { setOpen } = useContext(SearchContext);
  const nav = [
    { to:'/dashboard', label:'Dashboard' },
    { to:'/analytics', label:'Analytics' },
    { to:'/projects', label:'Projects' },
    { to:'/database', label:'Database' },
  ];
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-[#f0e0e0] dark:bg-[#141010]/80 dark:border-[#2a1e1e]">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 h-[64px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Telkom_Indonesia_2013.svg/1200px-Telkom_Indonesia_2013.svg.png" alt="Telkom" className="h-8 lg:h-9 object-contain" />
        </div>
        <nav className="hidden md:flex items-center gap-1 bg-[#fdf2f2] dark:bg-[#1f1515] rounded-full p-1">
          {nav.map(n=>(
            <NavLink key={n.to} to={n.to} className={({isActive})=>`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${isActive?'bg-[#C1272D] text-white shadow-telkom':'text-[#6b4a4a] hover:text-[#2d1a1a] dark:text-[#a89090] dark:hover:text-white'}`}>{n.label}</NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={()=>setOpen(true)} className="w-9 h-9 rounded-full bg-[#C1272D] text-white flex items-center justify-center hover:bg-[#A51E23] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M8 11h6"/></svg>
          </button>
          <div className="w-9 h-9 rounded-full bg-[#C1272D] text-white flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <button onClick={toggle} className="w-9 h-9 rounded-full bg-[#fdf2f2] dark:bg-[#1f1515] flex items-center justify-center border border-[#f0e0e0] dark:border-[#2a1e1e] hover:bg-[#fee2e2] transition-colors">
            {isDark ? <span className="text-lg">☀️</span> : <span className="text-lg">🌙</span>}
          </button>
        </div>
      </div>
      {/* Mobile nav */}
      <div className="md:hidden flex gap-1 px-4 pb-3 overflow-x-auto">
        {nav.map(n=>(
          <NavLink key={n.to} to={n.to} className={({isActive})=>`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap ${isActive?'bg-[#C1272D] text-white':'bg-[#fdf2f2] text-[#6b4a4a] dark:bg-[#1f1515]'}`}>{n.label}</NavLink>
        ))}
      </div>
    </header>
  );
}
