
import React, { createContext, useState, useMemo } from 'react';
import { projects, accountManagers } from '../data/mockData.js';
export const FilterContext = createContext();
export function FilterProvider({ children }){
  const [am, setAm] = useState('Semua AM');
  const [segmen, setSegmen] = useState('Semua Segmen');
  const [provinsi, setProvinsi] = useState('Semua Provinsi');
  const [search, setSearch] = useState('');

  const filteredProjects = useMemo(()=>{
    let list = [...projects];
    if(am!=='Semua AM') list = list.filter(p=>p.manager===am);
    if(segmen!=='Semua Segmen') list = list.filter(p=>p.segment===segmen);
    if(provinsi!=='Semua Provinsi') list = list.filter(p=>p.province===provinsi);
    if(search){
      const q = search.toLowerCase();
      list = list.filter(p=> `${p.project} ${p.customer} ${p.manager} ${p.cc}`.toLowerCase().includes(q));
    }
    return list;
  },[am, segmen, provinsi, search]);

  const filteredAMs = useMemo(()=>{
    if(am==='Semua AM') return accountManagers;
    return accountManagers.filter(a=>a.name===am);
  },[am]);

  const kpis = useMemo(()=>{
    const totalKB = filteredProjects.reduce((s,p)=>s+p.nilaiKB,0);
    const totalMitra = filteredProjects.reduce((s,p)=>s+p.nilaiMitra,0);
    const avgDel = filteredProjects.length ? Math.round(filteredProjects.reduce((s,p)=>s+p.delivery,0)/filteredProjects.length) : 0;
    const komposisi = totalKB ? Math.round((totalMitra/totalKB)*100) : 0;
    return {
      totalPekerjaan: filteredProjects.length,
      totalNilaiProyek: totalKB,
      totalNilaiMitra: totalMitra,
      komposisi,
      rataRataDelivery: avgDel,
      totalMitraCount: [...new Set(filteredProjects.map(p=>p.cc))].length
    };
  },[filteredProjects]);

  return (
    <FilterContext.Provider value={{ am, setAm, segmen, setSegmen, provinsi, setProvinsi, search, setSearch, filteredProjects, filteredAMs, kpis }}>
      {children}
    </FilterContext.Provider>
  );
}
