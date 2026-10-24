
import React, { createContext, useState } from 'react';
export const SearchContext = createContext();
export function SearchProvider({ children }){
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState(()=> JSON.parse(localStorage.getItem('telkom-search-history')||'["Lost","Own Channel Only","Dashboard","Monitoring Telkom","Bandwidth Mei - Des 2026","Data Monitoring"]'));
  const addHistory = (q)=>{
    if(!q) return;
    const nh = [q, ...history.filter(h=>h!==q)].slice(0,6);
    setHistory(nh);
    localStorage.setItem('telkom-search-history', JSON.stringify(nh));
  };
  const clearHistory = ()=>{
    setHistory([]);
    localStorage.removeItem('telkom-search-history');
  };
  const removeHistory = (q)=>{
    const nh = history.filter(h=>h!==q);
    setHistory(nh);
    localStorage.setItem('telkom-search-history', JSON.stringify(nh));
  };
  return <SearchContext.Provider value={{ open, setOpen, history, addHistory, clearHistory, removeHistory }}>{children}</SearchContext.Provider>
}
