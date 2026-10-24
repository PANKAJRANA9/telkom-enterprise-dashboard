
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import SearchModal from './SearchModal.jsx';

export default function Layout(){
  const loc = useLocation();
  const crumbs = {
    '/dashboard': ['Home','Dashboard'],
    '/analytics': ['Home','Analytics'],
    '/projects': ['Home','Monitoring Telkom'],
    '/database': ['Home','Monitoring Telkom','Data Monitoring'],
  };
  const current = crumbs[loc.pathname] || ['Home'];
  return (
    <div className="min-h-screen bg-[#fdf8f7] dark:bg-[#0f0a0a]">
      <Header />
      <SearchModal />
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-3">
        <div className="flex items-center gap-2 text-sm">
          {current.map((c,i)=>(
            <React.Fragment key={c}>
              {i>0 && <span className="text-[#a89090]">/</span>}
              <span className={i===current.length-1 ? 'text-[#6b4a4a] dark:text-[#a89090]' : 'text-[#C1272D] underline'}>{c}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
      <main className="max-w-[1400px] mx-auto px-4 lg:px-6 pb-10">
        <Outlet />
      </main>
    </div>
  );
}
