
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const [user, setUser] = useState('admin');
  const [pass, setPass] = useState('telkom123');
  const [show, setShow] = useState(false);
  const nav = useNavigate();
  const submit = (e)=>{
    e.preventDefault();
    localStorage.setItem('telkom-auth','true');
    localStorage.setItem('telkom-user', user);
    nav('/dashboard');
  };
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex flex-1 bg-[#C1272D] relative overflow-hidden p-12 flex-col justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C1272D] via-[#A51E23] to-[#8A1A1D]" />
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-[520px]">
          <div className="text-[11px] font-bold tracking-[0.2em] text-white/80 mb-6">TELKOM ENTERPRISE</div>
          <h1 className="text-[48px] font-black leading-[0.9] text-white tracking-tight">Monitoring<br/>Telkom Sumbar Jambi</h1>
          <p className="mt-6 text-white/90 text-[15px] leading-relaxed">Pantau nilai proyek, mitra, dan status pekerjaan Account Manager dalam satu dashboard.</p>
          <div className="mt-10 space-y-3 text-sm text-white/90">
            <div className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-white mt-2" />Rekap proyek real-time dari spreadsheet</div>
            <div className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-white mt-2" />Analitik per Account Manager, segmen, dan provinsi</div>
            <div className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-white mt-2" />Monitoring status pekerjaan mitra</div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 bg-[#fdf8f7]">
        <div className="w-full max-w-[420px] bg-white rounded-[24px] shadow-[0_20px_60px_rgba(193,39,45,0.15)] border border-[#f0e0e0] p-8 lg:p-10">
          <div className="flex justify-center mb-8">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Telkom_Indonesia_2013.svg/1200px-Telkom_Indonesia_2013.svg.png" alt="Telkom" className="h-10 object-contain" />
          </div>
          <h2 className="text-[24px] font-bold text-center">Selamat datang</h2>
          <p className="text-sm text-center text-[#6b4a4a] mt-1">Masuk untuk melihat dashboard monitoring.</p>
          <form onSubmit={submit} className="mt-8 space-y-5">
            <div>
              <label className="text-xs font-semibold">Nama pengguna</label>
              <input value={user} onChange={e=>setUser(e.target.value)} placeholder="Masukkan nama pengguna" className="mt-1.5 w-full px-4 py-3 rounded-xl border border-[#e8d5d5] bg-white text-sm outline-none focus:ring-2 focus:ring-[#C1272D]/20 focus:border-[#C1272D]" />
            </div>
            <div>
              <div className="flex justify-between"><label className="text-xs font-semibold">Kata sandi</label><a className="text-xs text-[#C1272D] font-medium">Lupa kata sandi?</a></div>
              <div className="mt-1.5 flex">
                <input type={show?'text':'password'} value={pass} onChange={e=>setPass(e.target.value)} placeholder="Masukkan kata sandi" className="flex-1 px-4 py-3 rounded-l-xl border border-r-0 border-[#e8d5d5] text-sm outline-none focus:ring-2 focus:ring-[#C1272D]/20" />
                <button type="button" onClick={()=>setShow(!show)} className="px-4 py-3 rounded-r-xl border border-[#e8d5d5] bg-[#fdf8f7] text-xs text-[#6b4a4a]">{show?'Sembunyi':'Tampilkan'}</button>
              </div>
            </div>
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="rounded" />Ingat saya di perangkat ini</label>
            <button className="w-full py-3.5 rounded-full bg-[#C1272D] hover:bg-[#A51E23] text-white font-bold shadow-telkom transition-all">Masuk</button>
          </form>
          <div className="mt-6 text-[11px] text-center text-[#a89090]">POC — 100% Mocked — Vercel Ready — admin / telkom123</div>
        </div>
      </div>
    </div>
  );
}
