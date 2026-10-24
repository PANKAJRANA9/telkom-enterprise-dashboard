
import React, { createContext, useState, useEffect } from 'react';
export const ThemeContext = createContext();
export function ThemeProvider({ children }){
  const [theme, setTheme] = useState(localStorage.getItem('telkom-theme') || 'light');
  useEffect(()=>{
    document.documentElement.classList.toggle('dark', theme==='dark');
    localStorage.setItem('telkom-theme', theme);
  },[theme]);
  const toggle = ()=> setTheme(t=> t==='light'?'dark':'light');
  return <ThemeContext.Provider value={{ theme, toggle, isDark: theme==='dark' }}>{children}</ThemeContext.Provider>
}
