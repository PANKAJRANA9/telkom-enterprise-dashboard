
export const accountManagers = [
  { id: 'rehan', name: 'Rehan', value: 10.16, mitraValue: 3.52, projects: 12, color: '#C1272D' },
  { id: 'edwin', name: 'Edwin', value: 9.97, mitraValue: 2.91, projects: 11, color: '#A51E23' },
  { id: 'hendri', name: 'Hendri', value: 7.45, mitraValue: 2.18, projects: 9, color: '#8A1A1D' },
  { id: 'jimmy', name: 'Jimmy', value: 7.12, mitraValue: 1.95, projects: 10, color: '#6E1517' },
  { id: 'yovandra', name: 'Yovandra', value: 5.78, mitraValue: 1.52, projects: 8, color: '#C1272D' },
  { id: 'avania', name: 'Avania', value: 5.76, mitraValue: 1.24, projects: 14, color: '#D43D42' },
  { id: 'fajry', name: 'Fajry', value: 4.62, mitraValue: 0.98, projects: 7, color: '#E05A5F' },
  { id: 'teguh', name: 'Teguh', value: 3.12, mitraValue: 0.72, projects: 6, color: '#EB7A7E' },
  { id: 'sabri', name: 'Sabri', value: 0.45, mitraValue: 0.12, projects: 2, color: '#F1999D' },
  { id: 'yunisa', name: 'Yunisa', value: 0.0, mitraValue: 0.0, projects: 0, color: '#F8B8BB' },
];

export const segments = ['Semua Segmen','Government','Enterprise'];
export const provinces = ['Semua Provinsi','Sumbar','Jambi'];
export const amOptions = ['Semua AM', ...accountManagers.map(a=>a.name)];

export const mitras = [
  { id: 'TPCC', name: 'TPCC', value: 6.66, projects: 18, color: '#C1272D' },
  { id: 'SSH', name: 'SSH', value: 2.54, projects: 9, color: '#8A1A1D' },
  { id: 'BUT', name: 'BUT', value: 2.46, projects: 8, color: '#A51E23' },
  { id: 'MCP', name: 'MCP', value: 1.82, projects: 6, color: '#D43D42' },
  { id: 'Lintas', name: 'Lintas Arta', value: 1.21, projects: 4, color: '#E05A5F' },
  { id: 'INF', name: 'Infomedia', value: 0.92, projects: 3, color: '#EB7A7E' },
  { id: 'Sigma', name: 'Sigma', value: 0.48, projects: 2, color: '#F1999D' },
];

export const statusOptions = ['Billcomp','P1','P2 - P8','KL/NP','Collect Eviden','Drafting BAST','Delivery'];
export const statusColors = {
  'Billcomp': 'bg-[#C1272D] text-white',
  'P1': 'bg-[#7c2d12] text-white',
  'P2 - P8': 'bg-[#92400e] text-white',
  'KL/NP': 'bg-[#a8a29e] text-white',
  'Collect Eviden': 'bg-[#4a5568] text-white',
  'Drafting BAST': 'bg-[#718096] text-white',
  'Delivery': 'bg-[#9b2c2c] text-white',
  'Confirmed': 'bg-emerald-600 text-white',
  'Active': 'bg-emerald-600 text-white',
  'Pending': 'bg-amber-600 text-white',
};

export const clients = [
  'Bapenda Sumbar','Kominfo Kota Padang','Kominfo Sumbar','Polda Jambi','Universitas Andalas',
  'Universitas Negeri Padang','Dinas Kesehatan Jambi','RSUD Jambi','Pemprov Sumbar','BPKAD Sumbar',
  'Dinas Pendidikan Sumbar','Kejaksaan Tinggi Jambi','PLN Sumbar','Bank Nagari','Telkomsel Sumbar'
];

export const projectNames = [
  'Kontrak Spesial 2026','IP Transit Backup 2026','Bandwidth Jan - Feb 2026','Bandwidth Mar 2026',
  'Bandwidth Apr 2026','Bandwidth Mei - Des 2026','Belanja Jastel 2026','Bandwidth Utama 2026',
  'Bandwidth Sumber Internet Utama 2026','Internet Dedicated 2026','VPN IP 2026','Metro-E 2026',
  'Astinet 2026','Indibiz 2026','PJJ Online 2026','Data Center 2026'
];

// Generate 97 projects matching screenshot data
function genProjects(){
  const list = [];
  let id = 1;
  const baseProjects = [
    { seg:'Government', prov:'Sumbar', cc:'Bapenda Sumbar', proj:'Kontrak Spesial 2026', mgr:'Avania', mitra:0.29, kb:1.68, del:100, status:'Billcomp' },
    { seg:'Government', prov:'Sumbar', cc:'Bapenda Sumbar', proj:'Kontrak Spesial 2026', mgr:'Avania', mitra:0.26, kb:1.68, del:100, status:'Collect Eviden' },
    { seg:'Government', prov:'Sumbar', cc:'Bapenda Sumbar', proj:'Kontrak Spesial 2026', mgr:'Avania', mitra:0.11, kb:1.68, del:75, status:'Billcomp' },
    { seg:'Government', prov:'Sumbar', cc:'Kominfo Kota Padang', proj:'IP Transit Backup 2026', mgr:'Avania', mitra:0.12, kb:0.30, del:100, status:'Billcomp' },
    { seg:'Government', prov:'Sumbar', cc:'Kominfo Sumbar', proj:'Bandwidth Jan - Feb 2026', mgr:'Avania', mitra:0.02, kb:0.54, del:100, status:'Billcomp' },
    { seg:'Government', prov:'Sumbar', cc:'Kominfo Sumbar', proj:'Bandwidth Mar 2026', mgr:'Avania', mitra:0.01, kb:0.27, del:100, status:'Billcomp' },
    { seg:'Government', prov:'Sumbar', cc:'Kominfo Sumbar', proj:'Bandwidth Apr 2026', mgr:'Avania', mitra:0.01, kb:0.27, del:100, status:'Billcomp' },
    { seg:'Government', prov:'Sumbar', cc:'Kominfo Sumbar', proj:'Bandwidth Mei - Des 2026', mgr:'Avania', mitra:0.06, kb:1.38, del:63, status:'Billcomp' },
    { seg:'Government', prov:'Sumbar', cc:'Kominfo Sumbar', proj:'Bandwidth Mei - Des 2026', mgr:'Avania', mitra:0.13, kb:1.38, del:0, status:'Delivery' },
  ];
  list.push(...baseProjects.map((p,i)=>({ id: ++id, ...p, segment:p.seg, province:p.prov, project:p.proj, manager:p.mgr, nilaiMitra:p.mitra, nilaiKB:p.kb, delivery:p.del, year:2026, customer:p.cc })));

  // Generate remaining to reach 97
  const amNames = accountManagers.map(a=>a.name);
  const provs = ['Sumbar','Jambi'];
  const segs = ['Government','Enterprise'];
  for(let i=list.length; i<96; i++){
    const mgr = amNames[Math.floor(Math.random()*amNames.length)];
    const am = accountManagers.find(a=>a.name===mgr);
    const prov = provs[Math.floor(Math.random()*2)];
    const seg = segs[Math.floor(Math.random()*2)];
    const projName = projectNames[Math.floor(Math.random()*projectNames.length)];
    const cc = clients[Math.floor(Math.random()*clients.length)];
    const mitraVal = +(Math.random()*1.2).toFixed(2);
    const kbVal = +(mitraVal * (1.2 + Math.random()*3)).toFixed(2);
    const delivery = [0,15,31,45,63,75,92,100,100,100,100][Math.floor(Math.random()*11)];
    const status = delivery===100 ? ['Billcomp','Billcomp','Billcomp','Collect Eviden'][Math.floor(Math.random()*4)] : delivery<30 ? 'Delivery' : ['Billcomp','P1','P2 - P8','KL/NP','Drafting BAST'][Math.floor(Math.random()*5)];
    list.push({
      id: ++id,
      segment: seg,
      province: prov,
      cc: cc,
      customer: cc,
      project: projName,
      manager: mgr,
      nilaiMitra: mitraVal,
      nilaiKB: kbVal,
      delivery: delivery,
      status: status,
      year: 2026
    });
  }
  // Ensure totals match screenshot ~55.03 M KB, 16.09 M Mitra
  return list;
}

export const projects = genProjects();

export const dashboardKPIs = {
  totalNilaiProyek: 55.03,
  totalMitraValue: 16.09,
  totalPekerjaan: 96,
  accountManagerCount: 10,
  mitraAktif: 7,
  rataRataDelivery: 76,
  komposisiPersen: 29,
  proyekAktif: 45,
  proyekBillcomp: 29,
};

export const monthlyData = [
  { month:'Jan', proyek: 4.2, mitra: 1.1 },
  { month:'Feb', proyek: 3.8, mitra: 0.9 },
  { month:'Mar', proyek: 5.1, mitra: 1.4 },
  { month:'Apr', proyek: 4.6, mitra: 1.3 },
  { month:'Mei', proyek: 6.2, mitra: 1.8 },
  { month:'Jun', proyek: 5.5, mitra: 1.6 },
  { month:'Jul', proyek: 4.9, mitra: 1.2 },
  { month:'Agu', proyek: 6.8, mitra: 2.1 },
  { month:'Sep', proyek: 5.3, mitra: 1.5 },
  { month:'Okt', proyek: 4.1, mitra: 1.0 },
  { month:'Nov', proyek: 3.2, mitra: 0.8 },
  { month:'Des', proyek: 1.33, mitra: 0.39 },
];

export const searchHistoryMock = ['Lost','Own Channel Only','Dashboard','Monitoring Telkom','Bandwidth Mei - Des 2026','Data Monitoring'];
