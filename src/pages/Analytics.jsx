
import React from 'react';
import { useFiltered } from '../hooks/useFiltered.js';
import { accountManagers } from '../data/mockData.js';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import FilterBar from '../components/FilterBar.jsx';

export default function Analytics(){
  const { kpis, filteredAMs } = useFiltered();
  const chartData = filteredAMs.map(am=>({ name: am.name, proyek: am.value, mitra: am.mitraValue }));
  const chartDataMitra = filteredAMs.map(am=>({ name: am.name, mitra: am.mitraValue }));

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
        <div>
          <div className="text-[11px] font-bold tracking-[0.2em] text-[#C1272D]">TELKOM ENTERPRISE</div>
          <h1 className="text-[32px] font-black tracking-tight">Analytics</h1>
          <p className="text-sm text-[#6b4a4a]">Analitik performa berdasarkan Account Manager dan segmen bisnis</p>
        </div>
        <FilterBar />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="card-telkom p-5 border-t-[3px] border-t-[#C1272D]">
          <div className="text-xs font-semibold text-[#6b4a4a]">Total Pekerjaan</div>
          <div className="text-[28px] font-black text-[#C1272D] mt-2">{kpis.totalPekerjaan}</div>
        </div>
        <div className="card-telkom p-5 border-t-[3px] border-t-[#C1272D]">
          <div className="text-xs font-semibold text-[#6b4a4a]">Komposisi Mitra</div>
          <div className="flex items-end justify-between mt-2">
            <div>
              <div className="text-[24px] font-black text-[#C1272D]">Rp{kpis.totalNilaiMitra.toFixed(2).replace('.',',')} M</div>
              <div className="text-xs text-[#6b4a4a]">dari Rp{kpis.totalNilaiProyek.toFixed(2).replace('.',',')} M</div>
            </div>
            <div className="text-[22px] font-black text-[#C1272D] border-l pl-4">{kpis.komposisi}%</div>
          </div>
        </div>
        <div className="card-telkom p-5 border-t-[3px] border-t-[#C1272D]">
          <div className="text-xs font-semibold text-[#6b4a4a]">Rata-Rata Delivery</div>
          <div className="text-[28px] font-black text-[#C1272D] mt-2">{kpis.rataRataDelivery}%</div>
        </div>
      </div>

      <div className="card-telkom">
        <div className="px-5 py-3 border-b border-[#f0e0e0] dark:border-[#2a1e1e] bg-[#fdf8f7]/50 dark:bg-[#1f1515]/50">
          <h3 className="font-bold text-sm">Total Nilai Proyek per Account Manager</h3>
        </div>
        <div className="p-4 h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0e0e0" />
              <XAxis dataKey="name" tick={{fontSize:11}} />
              <YAxis tick={{fontSize:11}} />
              <Tooltip contentStyle={{borderRadius:12, border:'1px solid #f0e0e0'}} />
              <Bar dataKey="proyek" fill="#C1272D" radius={[6,6,0,0]} barSize={48} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card-telkom">
        <div className="px-5 py-3 border-b border-[#f0e0e0] dark:border-[#2a1e1e] bg-[#fdf8f7]/50 dark:bg-[#1f1515]/50">
          <h3 className="font-bold text-sm">Total Nilai Mitra per Account Manager</h3>
        </div>
        <div className="p-4 h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartDataMitra}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0e0e0" />
              <XAxis dataKey="name" tick={{fontSize:11}} />
              <YAxis tick={{fontSize:11}} domain={[0,4]} />
              <Tooltip />
              <Bar dataKey="mitra" fill="#C1272D" radius={[6,6,0,0]} barSize={32} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="card-telkom">
          <div className="px-5 py-3 border-b"><h3 className="font-bold text-sm">Komposisi Mitra per AM (%)</h3></div>
          <div className="p-4 space-y-3">
            {filteredAMs.map(am=>{
              const pct = am.value ? Math.round((am.mitraValue/am.value)*100) : 0;
              return (
                <div key={am.id} className="flex items-center gap-3">
                  <span className="text-xs w-20">{am.name}</span>
                  <div className="flex-1 h-2 bg-[#f0e0e0] dark:bg-[#2a1e1e] rounded-full overflow-hidden"><div className="h-full bg-[#C1272D]" style={{width:`${pct}%`}} /></div>
                  <span className="text-xs font-bold w-10 text-right">{pct}%</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="card-telkom">
          <div className="px-5 py-3 border-b"><h3 className="font-bold text-sm">Rata-Rata Delivery per AM</h3></div>
          <div className="p-4 space-y-3">
            {filteredAMs.map(am=>(
              <div key={am.id} className="flex items-center gap-3">
                <span className="text-xs w-20">{am.name}</span>
                <div className="flex-1 h-2 bg-[#f0e0e0] dark:bg-[#2a1e1e] rounded-full overflow-hidden"><div className="h-full bg-[#8A1A1D]" style={{width:`${65+Math.random()*30}%`}} /></div>
                <span className="text-xs font-bold w-10 text-right">{Math.round(60+Math.random()*35)}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
