
import React, { useState } from 'react';
import { useFiltered } from '../hooks/useFiltered.js';
import FilterBar from '../components/FilterBar.jsx';
import { statusColors } from '../data/mockData.js';

export default function Projects(){
  const { filteredProjects, kpis } = useFiltered();
  const [searchLocal, setSearchLocal] = useState('');

  const filtered = filteredProjects.filter(p=> !searchLocal || `${p.customer} ${p.project} ${p.manager}`.toLowerCase().includes(searchLocal.toLowerCase()));

  const totalProyek = kpis.totalNilaiProyek;
  const totalMitra = kpis.totalNilaiMitra;

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
        <div>
          <div className="text-[11px] font-bold tracking-[0.2em] text-[#C1272D]">TELKOM ENTERPRISE</div>
          <h1 className="text-[32px] font-black tracking-tight leading-tight">Rekap Penjualan & Pengiriman</h1>
          <p className="text-sm text-[#6b4a4a]">Wilayah kerja Sumatera Barat dan Jambi · Periode Januari - Desember 2026</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-full bg-white dark:bg-[#1a1212] border flex items-center justify-center">⚗️</button>
          <button className="px-4 py-2 rounded-lg bg-[#2d1a1a] text-white text-sm font-semibold flex items-center gap-2">☁️ Cetak</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card-telkom p-5">
          <div className="flex justify-between"><span className="text-xs text-[#6b4a4a]">Total Nilai Proyek</span><span className="w-8 h-8 rounded-lg bg-[#fdf2f2] flex items-center justify-center">📤</span></div>
          <div className="text-[24px] font-black mt-3">Rp {totalProyek.toFixed(2).replace('.',',')} M</div>
          <div className="text-[11px] text-[#C1272D] font-semibold mt-1">Nilai Mitra Rp {totalMitra.toFixed(2).replace('.',',')} M</div>
        </div>
        <div className="card-telkom p-5">
          <div className="flex justify-between"><span className="text-xs text-[#6b4a4a]">Proyek Aktif</span><span className="w-8 h-8 rounded-lg bg-[#fdf2f2] flex items-center justify-center">📦</span></div>
          <div className="text-[24px] font-black mt-3">{filtered.length}</div>
          <div className="text-[11px] text-[#6b4a4a] mt-1">{filtered.filter(p=>p.status==='Billcomp').length} proyek Billcomp</div>
        </div>
        <div className="card-telkom p-5">
          <div className="flex justify-between"><span className="text-xs text-[#6b4a4a]">Delivery</span><span className="w-8 h-8 rounded-lg bg-[#fdf2f2] flex items-center justify-center">⦿</span></div>
          <div className="text-[24px] font-black mt-3">{kpis.rataRataDelivery}%</div>
          <div className="mt-2 h-1 bg-[#f0e0e0] rounded-full overflow-hidden"><div className="h-full bg-[#C1272D]" style={{width:`${kpis.rataRataDelivery}%`}} /></div>
        </div>
        <div className="card-telkom p-5">
          <div className="flex justify-between"><span className="text-xs text-[#6b4a4a]">Account Manager</span><span className="w-8 h-8 rounded-lg bg-[#fdf2f2] flex items-center justify-center">👥</span></div>
          <div className="text-[24px] font-black mt-3">{[...new Set(filtered.map(p=>p.manager))].length}</div>
          <div className="text-[11px] text-[#6b4a4a] mt-1">Penanggung Jawab proyek</div>
        </div>
      </div>

      <div className="card-telkom overflow-hidden">
        <div className="px-5 py-4 border-b flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div>
            <h3 className="font-bold text-sm">Rekap proyek per Account Manager</h3>
            <p className="text-xs text-[#6b4a4a]">Status penjualan dan pengiriman terakhir</p>
          </div>
          <div className="flex items-center gap-2">
            <FilterBar compact />
            <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#2d1a1a] text-white font-bold">{filtered.length} proyek</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#fdf2f2] dark:bg-[#1f1515] text-[11px] font-bold text-[#6b4a4a]">
              <tr><th className="text-left px-4 py-3">Segment</th><th className="text-left px-2 py-3">Provinsi</th><th className="text-left px-2 py-3">AM</th><th className="text-left px-4 py-3">NAMA PELANGGAN</th><th className="text-left px-4 py-3">Nama Proyek</th><th className="text-left px-3 py-3">Delivery</th><th className="text-left px-3 py-3">Status</th><th className="text-left px-3 py-3">Nilai KB</th><th className="text-left px-4 py-3">Aksi</th></tr>
            </thead>
            <tbody>
              {filtered.slice(0,25).map(p=>(
                <tr key={p.id} className="border-t border-[#f5e5e5] dark:border-[#2a1e1e] hover:bg-[#fdf8f7] dark:hover:bg-[#1f1515]/50">
                  <td className="px-4 py-3 text-xs">{p.segment}</td>
                  <td className="px-2 py-3 text-xs">{p.province}</td>
                  <td className="px-2 py-3 text-xs font-bold">{p.manager}</td>
                  <td className="px-4 py-3 text-xs">{p.customer}</td>
                  <td className="px-4 py-3 text-xs font-medium">{p.project}</td>
                  <td className="px-3 py-3"><span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#C1272D] text-white">{p.delivery}%</span></td>
                  <td className="px-3 py-3"><span className={`px-2 py-0.5 rounded text-[11px] font-bold ${statusColors[p.status]||'bg-slate-200'}`}>{p.status}</span></td>
                  <td className="px-3 py-3 text-xs">Rp {p.nilaiKB.toFixed(2)} M</td>
                  <td className="px-4 py-3"><button className="px-3 py-1 rounded border border-[#C1272D] text-[#C1272D] text-[11px] hover:bg-[#C1272D] hover:text-white transition-colors">Lihat detail</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
