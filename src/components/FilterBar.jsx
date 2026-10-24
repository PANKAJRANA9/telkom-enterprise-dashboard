
import React from 'react';
import { useFiltered } from '../hooks/useFiltered.js';
import { amOptions, segments, provinces } from '../data/mockData.js';

export default function FilterBar({ compact=false }){
  const { am, setAm, segmen, setSegmen, provinsi, setProvinsi } = useFiltered();
  return (
    <div className={`flex flex-wrap gap-3 ${compact?'':'justify-end'}`}>
      <div className="flex flex-col gap-1">
        <label className="text-[11px] font-semibold text-[#6b4a4a]">Account Manager</label>
        <select value={am} onChange={e=>setAm(e.target.value)} className="px-3 py-2 rounded-lg bg-white dark:bg-[#1a1212] border border-[#e8d5d5] dark:border-[#2a1e1e] text-xs min-w-[130px]">
          {amOptions.map(o=><option key={o} value={o}>{o}</option>)}
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-[11px] font-semibold text-[#6b4a4a]">Segmen</label>
        <select value={segmen} onChange={e=>setSegmen(e.target.value)} className="px-3 py-2 rounded-lg bg-white dark:bg-[#1a1212] border border-[#e8d5d5] dark:border-[#2a1e1e] text-xs min-w-[130px]">
          {segments.map(o=><option key={o} value={o}>{o}</option>)}
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-[11px] font-semibold text-[#6b4a4a]">Provinsi</label>
        <select value={provinsi} onChange={e=>setProvinsi(e.target.value)} className="px-3 py-2 rounded-lg bg-white dark:bg-[#1a1212] border border-[#e8d5d5] dark:border-[#2a1e1e] text-xs min-w-[130px]">
          {provinces.map(o=><option key={o} value={o}>{o}</option>)}
        </select>
      </div>
    </div>
  );
}
