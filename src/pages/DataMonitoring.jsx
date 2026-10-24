
import React, { useState } from 'react';
import { useFiltered } from '../hooks/useFiltered.js';
import { statusColors } from '../data/mockData.js';
import FilterBar from '../components/FilterBar.jsx';

export default function DataMonitoring(){
  const { filteredProjects } = useFiltered();
  const [search, setSearch] = useState('');
  const [showFilter, setShowFilter] = useState(false);

  const filtered = filteredProjects.filter(p=> !search || `${p.manager} ${p.customer} ${p.project} ${p.cc}`.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-5">
      <div>
        <div className="text-[11px] font-bold tracking-[0.2em] text-[#C1272D]">TELKOM ENTERPRISE</div>
        <h1 className="text-[32px] font-black tracking-tight">Data Monitoring</h1>
        <p className="text-sm text-[#6b4a4a]">Kelola data penjualan dan pengiriman proyek Sumatera Barat dan Jambi 2026</p>
      </div>

      <div className="card-telkom overflow-hidden">
        <div className="px-4 py-3 bg-[#fdf8f7] dark:bg-[#1f1515]/50 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-bold text-sm">Daftar proyek</h3>
            <p className="text-xs text-[#6b4a4a]">{filtered.length} data ditampilkan</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={()=>setShowFilter(!showFilter)} className="w-9 h-9 rounded-full bg-white dark:bg-[#1a1212] border flex items-center justify-center hover:bg-[#fdf2f2]">⚙️</button>
            <div className="relative">
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Cari Manager, CC, Project..." className="w-[240px] px-3 py-2 rounded-lg bg-white dark:bg-[#1a1212] border border-[#e8d5d5] text-xs outline-none focus:ring-2 focus:ring-[#C1272D]/20" />
            </div>
          </div>
        </div>

        {showFilter && <div className="p-4 border-b bg-[#fdf8f7] dark:bg-[#1f1515]"><FilterBar /></div>}

        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead className="bg-[#fdf2f2] dark:bg-[#1f1515] text-xs">
              <tr>
                <th className="text-left px-3 py-3 font-bold">Segment</th>
                <th className="text-left px-2 py-3 font-bold">Provinsi</th>
                <th className="text-left px-2 py-3 font-bold">CC</th>
                <th className="text-left px-4 py-3 font-bold">Project</th>
                <th className="text-left px-3 py-3 font-bold">Manager</th>
                <th className="text-left px-2 py-3 font-bold">Nilai Mitra</th>
                <th className="text-left px-2 py-3 font-bold">Nilai KB</th>
                <th className="text-left px-2 py-3 font-bold">Delivery</th>
                <th className="text-left px-2 py-3 font-bold">Status</th>
                <th className="text-left px-4 py-3 font-bold">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filtered.slice(0,30).map(p=>(
                <tr key={p.id} className="border-t border-[#f5e5e5] dark:border-[#2a1e1e] hover:bg-[#fdf8f7] dark:hover:bg-[#1f1515]/50">
                  <td className="px-3 py-3 text-xs">{p.segment}</td>
                  <td className="px-2 py-3 text-xs">{p.province}</td>
                  <td className="px-2 py-3 text-xs truncate max-w-[120px]" title={p.cc}>{p.cc}</td>
                  <td className="px-4 py-3 text-xs font-semibold">{p.project}</td>
                  <td className="px-3 py-3 text-xs">{p.manager}</td>
                  <td className="px-2 py-3 text-xs">Rp {p.nilaiMitra.toFixed(2)} M</td>
                  <td className="px-2 py-3 text-xs">Rp {p.nilaiKB.toFixed(2)} M</td>
                  <td className="px-2 py-3"><span className={`px-2 py-0.5 rounded text-[11px] font-bold ${p.delivery===100?'bg-[#C1272D] text-white': p.delivery===0?'bg-[#2d1a1a] text-white':'bg-[#C1272D]/80 text-white'}`}>{p.delivery}%</span></td>
                  <td className="px-2 py-3"><span className={`px-2 py-0.5 rounded text-[10px] font-bold ${statusColors[p.status]||'bg-slate-200'}`}>{p.status}</span></td>
                  <td className="px-4 py-3"><button className="px-2.5 py-1 rounded border border-[#C1272D] text-[#C1272D] text-[11px] hover:bg-[#C1272D] hover:text-white">Detail</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
