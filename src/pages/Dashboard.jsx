
import React, { useContext } from 'react';
import { useFiltered } from '../hooks/useFiltered.js';
import { accountManagers, mitras } from '../data/mockData.js';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import FilterBar from '../components/FilterBar.jsx';

export default function Dashboard(){
  const { kpis, filteredProjects, filteredAMs } = useFiltered();

  const topAM = [...accountManagers].sort((a,b)=>b.value-a.value).slice(0,3);
  const topProjects = [
    { name:'Belanja Jastel 2026', client:'Polda Jambi', value:'Rp7 M', tag:'Polda Jambi' },
    { name:'Bandwidth Utama 2026', client:'Universitas Andalas', value:'Rp5,49 M', tag:'Universitas Andalas' },
    { name:'Bandwidth Sumber Internet Utama 2026', client:'Universitas Negeri Padang', value:'Rp4,51 M', tag:'Universitas Negeri Padang' },
  ];
  const statusData = [
    { name:'Billcomp', value:29, color:'#C1272D' },
    { name:'P1', value:3, color:'#7c2d12' },
    { name:'P2 - P8', value:3, color:'#92400e' },
    { name:'KL/NP', value:2, color:'#a8a29e' },
    { name:'Collect Eviden', value:1, color:'#4a5568' },
    { name:'Drafting BAST', value:1, color:'#718096' },
    { name:'Delivery', value:1, color:'#9b2c2c' },
  ];

  const chartDataAM = accountManagers.map(am=>({ name: am.name, value: am.value }));
  const chartDataMitra = mitras.map(m=>({ name: m.name, value: m.value }));

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
        <div>
          <div className="text-[11px] font-bold tracking-[0.2em] text-[#C1272D]">TELKOM ENTERPRISE</div>
          <h1 className="text-[32px] lg:text-[40px] font-black tracking-tight leading-none mt-1">Dashboard Overview</h1>
          <p className="text-sm text-[#6b4a4a] mt-2">Monitor your business performance in real-time</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-full bg-white dark:bg-[#1a1212] border border-[#f0e0e0] dark:border-[#2a1e1e] flex items-center justify-center">⚙️</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#C1272D] text-white rounded-2xl p-6 shadow-telkom relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full" />
          <div className="relative z-10">
            <div className="flex justify-between items-start">
              <span className="text-xs font-medium opacity-90">Total Nilai Proyek</span>
              <span className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center">📋</span>
            </div>
            <div className="text-[28px] font-black mt-4">Rp{kpis.totalNilaiProyek.toFixed(2).replace('.',',')} Miliar</div>
            <div className="text-[11px] opacity-80 mt-2">Data spreadsheet 2026</div>
          </div>
        </div>
        <div className="card-telkom p-6">
          <div className="flex justify-between"><span className="text-xs text-[#6b4a4a]">Account Manager</span><span className="w-8 h-8 rounded-full bg-[#2d1a1a] text-white flex items-center justify-center text-xs">👤</span></div>
          <div className="text-[32px] font-black mt-3">{accountManagers.length}</div>
          <div className="text-[11px] text-[#a89090] mt-1">Penanggung jawab</div>
        </div>
        <div className="card-telkom p-6">
          <div className="flex justify-between"><span className="text-xs text-[#6b4a4a]">Total Nilai Mitra</span><span className="w-8 h-8 rounded-full bg-[#2d1a1a] text-white flex items-center justify-center text-xs">⊗</span></div>
          <div className="text-[26px] font-black mt-3">Rp{kpis.totalNilaiMitra.toFixed(2).replace('.',',')} Miliar</div>
          <div className="text-[11px] text-[#a89090] mt-1">{mitras.length} mitra terdata</div>
        </div>
        <div className="card-telkom p-5">
          <div className="flex justify-between"><span className="text-xs text-[#6b4a4a]">Total Mitra</span><span className="w-8 h-8 rounded-full bg-[#2d1a1a] text-white flex items-center justify-center text-xs">👥</span></div>
          <div className="text-[22px] font-black mt-2">{mitras.length} <span className="text-[11px] font-normal text-[#6b4a4a]">mitra aktif</span></div>
          <div className="mt-4 space-y-2.5">
            {mitras.slice(0,3).map((m,i)=>(
              <div key={m.id} className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#C1272D] text-white text-[10px] flex items-center justify-center font-bold">{i+1}</span>
                <span className="text-[11px] font-bold w-8">{m.name}</span>
                <div className="flex-1 h-1 bg-[#f0e0e0] dark:bg-[#2a1e1e] rounded-full overflow-hidden"><div className="h-full bg-[#C1272D]" style={{width:`${(m.value/7)*100}%`}} /></div>
                <span className="text-[10px] text-[#6b4a4a]">Rp{m.value.toFixed(2)} M</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="card-telkom p-5">
          <div className="text-[11px] font-bold tracking-widest text-[#C1272D]">PERFORMA</div>
          <h3 className="text-xl font-black mt-1">Top AM</h3>
          <p className="text-[11px] text-[#a89090]">berdasarkan nilai proyek</p>
          <div className="mt-5 space-y-3">
            {topAM.map((am,i)=>(
              <div key={am.id} className="flex justify-between items-center py-1.5 border-b border-[#f5e5e5] dark:border-[#2a1e1e] last:border-0">
                <span className="text-xs">{i+1}. {am.name}</span>
                <span className="text-xs font-bold">Rp{am.value.toFixed(2).replace('.',',')} M</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card-telkom p-5">
          <div className="text-[11px] font-bold tracking-widest text-[#C1272D]">PORTOFOLIO</div>
          <h3 className="text-xl font-black mt-1">Top Project</h3>
          <p className="text-[11px] text-[#a89090]">berdasarkan nilai KB</p>
          <div className="mt-5 space-y-3">
            {topProjects.map((p,i)=>(
              <div key={i} className="py-2 border-b border-[#f5e5e5] dark:border-[#2a1e1e] last:border-0">
                <div className="flex justify-between gap-2">
                  <span className="text-xs">{i+1}. {p.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#fee2e2] text-[#8A1A1D]">{p.tag}</span>
                </div>
                <div className="text-[11px] text-[#a89090] mt-1 flex justify-between"><span>{p.client}</span><span className="font-bold text-[#2d1a1a] dark:text-white">{p.value}</span></div>
              </div>
            ))}
          </div>
        </div>
        <div className="card-telkom p-5">
          <div className="text-[11px] font-bold tracking-widest text-[#C1272D]">STATUS</div>
          <h3 className="text-lg font-black mt-1">Status Pekerjaan Mitra</h3>
          <div className="flex gap-4 mt-4">
            <div className="flex-1">
              <div className="text-sm font-bold">Rp{kpis.totalNilaiMitra.toFixed(2).replace('.',',')} M</div>
              <div className="text-[11px] text-[#a89090]">Total nilai Mitra</div>
              <div className="mt-4 grid grid-cols-2 gap-1.5 text-[10px]">
                {statusData.map(s=>(
                  <div key={s.name} className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{background:s.color}} />{s.name} <b>{s.value}</b></div>
                ))}
              </div>
            </div>
            <div className="w-[80px] h-[80px] relative">
              <ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={statusData} dataKey="value" innerRadius={28} outerRadius={40} paddingAngle={2}>{statusData.map((e,i)=><Cell key={i} fill={e.color} />)}</Pie></PieChart></ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center text-xs font-black">{kpis.totalPekerjaan}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="card-telkom p-5">
          <div className="text-[11px] font-bold tracking-widest text-[#C1272D]">ANALYTICS</div>
          <h3 className="text-xl font-bold mt-1">Nilai Proyek per Account Manager</h3>
          <p className="text-[11px] text-[#a89090]">Perbandingan nilai proyek berdasarkan filter aktif</p>
          <div className="h-[220px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartDataAM}><XAxis dataKey="name" tick={{fontSize:10}} /><YAxis tick={{fontSize:10}} /><Tooltip /><Bar dataKey="value" fill="#C1272D" radius={[6,6,0,0]} /></BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="card-telkom p-5">
          <div className="text-[11px] font-bold tracking-widest text-[#C1272D]">PARTNERS</div>
          <h3 className="text-xl font-bold mt-1">Nilai Proyek per Mitra</h3>
          <p className="text-[11px] text-[#a89090]">Nilai Mitra berdasarkan filter aktif</p>
          <div className="h-[220px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartDataMitra}><XAxis dataKey="name" tick={{fontSize:10}} /><YAxis tick={{fontSize:10}} /><Tooltip /><Bar dataKey="value" fill="#8A1A1D" radius={[6,6,0,0]} /></BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
