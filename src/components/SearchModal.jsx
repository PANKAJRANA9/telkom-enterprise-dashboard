
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext.jsx';
import { useFiltered } from '../hooks/useFiltered.js';

export default function SearchModal(){
  const { open, setOpen, history, clearHistory, removeHistory, addHistory } = useContext(SearchContext);
  const { setSearch } = useFiltered();
  const [q, setQ] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    const handler = (e)=>{
      if((e.ctrlKey || e.metaKey) && e.key==='k'){ e.preventDefault(); setOpen(true); }
      if(e.key==='Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return ()=> window.removeEventListener('keydown', handler);
  },[]);

  if(!open) return null;

  const menus = [
    { label:'Dashboard', desc:'Ringkasan performa penjualan dan target', tag:'Menu Utama', to:'/dashboard', icon:'📊' },
    { label:'Analytics', desc:'Statistik grafik dan analisis proyek', tag:'Menu Utama', to:'/analytics', icon:'📈' },
    { label:'Monitoring Telkom', desc:'Ringkasan status proyek dan mitra', tag:'Monitoring', to:'/projects', icon:'🏢' },
    { label:'Data Monitoring', desc:'Tabel lengkap data proyek & rincian status', tag:'Monitoring', to:'/database', icon:'🗂️' },
  ];

  const filteredMenus = menus.filter(m=> !q || `${m.label} ${m.desc}`.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={()=>setOpen(false)} />
      <div className="relative w-full max-w-[640px] bg-white dark:bg-[#1a1212] rounded-2xl shadow-2xl border border-[#f0e0e0] dark:border-[#2a1e1e] overflow-hidden animate-in">
        <div className="p-3 border-b border-[#f0e0e0] dark:border-[#2a1e1e] flex items-center gap-3">
          <div className="flex-1 relative">
            <span className="absolute left-3 top-2.5 text-[#C1272D]">🔍</span>
            <input autoFocus value={q} onChange={e=>setQ(e.target.value)} placeholder="Cari menu, proyek, manager, mitra, customer order..." className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#fdf2f2] dark:bg-[#1f1515] border border-[#f0e0e0] dark:border-[#2a1e1e] text-sm outline-none focus:ring-2 focus:ring-[#C1272D]/30" />
          </div>
          <button onClick={()=>setOpen(false)} className="w-8 h-8 rounded-full bg-[#fdf2f2] dark:bg-[#1f1515] flex items-center justify-center hover:bg-[#fee2e2]">✕</button>
        </div>

        {!q && (
          <div className="p-4 border-b border-[#f0e0e0] dark:border-[#2a1e1e]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold tracking-widest text-[#a89090]">PENCARIAN TERKINI</span>
              <button onClick={clearHistory} className="text-xs text-[#C1272D] hover:underline">Hapus Semua</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {history.map(h=>(
                <span key={h} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fdf2f2] dark:bg-[#1f1515] border border-[#f0e0e0] dark:border-[#2a1e1e] text-xs">
                  <span>🕒</span>{h}<button onClick={()=>removeHistory(h)} className="ml-1 hover:text-[#C1272D]">✕</button>
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="p-4 max-h-[50vh] overflow-auto">
          <div className="text-[11px] font-bold tracking-widest text-[#a89090] mb-3">MENU POPULER & NAVIGASI</div>
          <div className="space-y-2">
            {filteredMenus.map(m=>(
              <button key={m.label} onClick={()=>{ addHistory(m.label); setSearch(m.label); navigate(m.to); setOpen(false); }} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-[#fdf2f2] dark:hover:bg-[#1f1515] text-left transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#fdf2f2] dark:bg-[#1f1515] flex items-center justify-center text-[#C1272D]">{m.icon}</div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">{m.label}</div>
                  <div className="text-xs text-[#a89090]">{m.desc}</div>
                </div>
                <span className="text-[10px] px-2 py-1 rounded-full bg-[#fee2e2] text-[#C1272D] border border-[#fecaca]">{m.tag}</span>
                <span className="text-[#a89090]">→</span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-3 bg-[#fdf2f2] dark:bg-[#1f1515] border-t border-[#f0e0e0] dark:border-[#2a1e1e] flex items-center justify-between text-[11px] text-[#a89090]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 bg-white dark:bg-[#2a1e1e] rounded border">↵</kbd> pilih</span>
            <span className="flex items-center gap-1"><kbd className="px-1 py-0.5 bg-white dark:bg-[#2a1e1e] rounded border">↑</kbd><kbd className="px-1 py-0.5 bg-white dark:bg-[#2a1e1e] rounded border">↓</kbd> navigasi</span>
            <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 bg-white dark:bg-[#2a1e1e] rounded border">ESC</kbd> tutup</span>
          </div>
          <span className="font-semibold">Web Rekap Telkom</span>
        </div>
      </div>
    </div>
  );
}
