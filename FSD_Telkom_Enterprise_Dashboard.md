
# TELKOM ENTERPRISE - MONITORING SUMBAR JAMBI
## Functional Specification Document (FSD) + Architecture - 12yr Experience

### 1. Executive Summary
Enterprise-grade web-based monitoring and analytics dashboard for Telkom Enterprise to track sales pipeline, delivery progress, and partner (mitra) project execution across West Sumatra and Jambi regions.

**Live POC:** Vercel 100% Mocked - No Backend - Finance-first architecture
**Tech Stack:** React 18 + Vite + React Router + Recharts + Tailwind CSS + Context API
**Theme:** Telkom Indonesia Red (#C1272D) - Light/Dark mode
**Data:** 100% mocked 97 projects, 10 AM, 7 Mitra, Rp55,03 Miliar total

### 2. Business Goals
- Real-time visibility of project value, AM performance, mitra budget
- Track delivery lifecycle: Billcomp, P1, P2-P8, KL/NP, Collect Eviden, Drafting BAST, Delivery
- Enable filtering by AM, Segment (Government/Enterprise), Province (Sumbar/Jambi)
- Executive decision support with Top AM, Top Project, Status breakdown

### 3. User Roles
- **Executive:** Views Dashboard Overview, Analytics
- **Account Manager:** Filtered view by own projects, delivery tracking
- **Mitra Manager:** Mitra value, composition, status
- **Admin:** Full access, search, data monitoring

### 4. Module Breakdown

#### 4.1 Auth Module (Login)
- Route: /login
- Features: Username/password (mocked admin/telkom123), Remember me, Show/hide password
- Storage: localStorage telkom-auth flag (POC)
- UI: Split screen - Left branding red gradient, Right login card (as per Screenshot_37.png)
- Validation: Any credentials accepted for POC

#### 4.2 Layout & Navigation Module
- Header: Telkom logo, Nav pills (Dashboard, Analytics, Projects, Database), Search icon, User icon, Theme toggle
- Breadcrumb: Home / Current (dynamic)
- Responsive: Mobile nav pills horizontal scroll
- Dark/Light: Context + localStorage, Tailwind dark: class

#### 4.3 Global Search Module (Cmd+K)
- Trigger: Search icon, Ctrl+K
- Features: Input with placeholder "Cari menu, proyek, manager, mitra...", Recent search chips with delete, Popular menu list with tags (Menu Utama, Monitoring)
- History: localStorage telkom-search-history, max 6, deduped
- Navigation: Click menu -> navigate + set filter
- UI: Modal centered, backdrop blur, keyboard hints (Enter, Arrows, ESC) - Matches Screenshot_42.png

#### 4.4 Dashboard Overview Module (Executive)
- Route: /dashboard
- KPIs:
  - Total Nilai Proyek: Rp55,03 Miliar (red card)
  - Account Manager: 10 (count)
  - Total Nilai Mitra: Rp16,09 Miliar (7 mitra terdata)
  - Total Mitra: 7 mitra aktif with breakdown TPCC Rp6,66M, SSH Rp2,54M, BUT Rp2,46M + progress bars
- Performa: Top AM based on nilai proyek (Rehan Rp10,16M, Edwin Rp9,97M, Hendri Rp7,45M)
- Portofolio: Top Project (Belanja Jastel 2026 Polda Jambi Rp7M, etc)
- Status: Status Pekerjaan Mitra donut chart 45 projects with legend Billcomp 29, P1 3, etc
- Analytics: Nilai Proyek per AM bar chart, Nilai per Mitra bar chart
- Filters: Global AM/Segmen/Provinsi affect all KPIs
- Data: Computed from filteredProjects

#### 4.5 Analytics Module
- Route: /analytics
- Filters: Dropdowns - Account Manager (Semua AM + 10 names), Segmen (Semua Segmen, Government, Enterprise), Provinsi (Semua Provinsi, Sumbar, Jambi)
- KPIs:
  - Total Pekerjaan: count of filtered projects (96)
  - Komposisi Mitra: Rp16,10 M dari Rp55,03 M = 29% with split display
  - Rata-Rata Delivery: 76%
- Charts:
  - Total Nilai Proyek per AM: Vertical bar chart, red #C1272D, X=AM names (Rehan, Edwin, Hendri...), Y=value
  - Total Nilai Mitra per AM: Similar, smaller bars
  - Komposisi Mitra per AM (%): Progress bars per AM
  - Rata-Rata Delivery per AM: Progress bars
- Logic: Filters recalculate KPIs and charts in real-time via FilterContext

#### 4.6 Projects Module (Rekap Penjualan & Pengiriman)
- Route: /projects
- Title: Rekap Penjualan & Pengiriman - Wilayah kerja Sumbar dan Jambi - Periode Januari-Desember 2026
- KPIs: Total Nilai Proyek Rp55,03M, Proyek Aktif 45 (29 Billcomp), Delivery 76% with progress bar, Account Manager 10
- Table: Rekap proyek per Account Manager with columns Segment, Provinsi, AM, NAMA PELANGGAN, Nama Proyek, Delivery %, Status (badge), Nilai KB, Aksi (Lihat detail)
- Filters: Same as Analytics, plus local search
- Actions: Cetak button (mock print), Filter toggle
- Matches Screenshot_40.png

#### 4.7 Database / Data Monitoring Module
- Route: /database
- Title: Data Monitoring - Kelola data penjualan dan pengiriman proyek Sumbar dan Jambi 2026
- Header: Daftar proyek - 97 data ditampilkan, Filter icon, Search input "Cari Manager, CC, Project..."
- Table Columns: Segment, Provinsi, CC (Customer), Project, Manager, Nilai Mitra, Nilai KB, Delivery %, Status badge (Billcomp red, Collect Eviden gray, Delivery dark red), Aksi Detail button
- Rows: 97 mocked rows matching screenshot pattern (Government Sumbar Bapenda Sumbar Kontrak Spesial 2026 Avania Rp0,29M Rp1,68M 100% Billcomp)
- Features: Search filter, Global filters collapsible, Pagination (show 30)
- Matches Screenshot_41.png

### 5. Data Model (Mocked)

```js
Project {
  id: number,
  segment: 'Government'|'Enterprise',
  province: 'Sumbar'|'Jambi',
  cc: string, // customer company
  customer: string,
  project: string,
  manager: string (AM name),
  nilaiMitra: number (in Miliar),
  nilaiKB: number,
  delivery: number (0-100),
  status: enum,
  year: 2026
}
AccountManager { id, name, value, mitraValue, projects, color }
Mitra { id, name, value, projects, color }
```

Totals: Sum nilaiKB = 55.03, Sum nilaiMitra = 16.09, Projects = 96-97

### 6. Architecture - 12yr Best Practices

**Frontend Architecture:**
- Vite for fast dev/build
- Component-driven: UI components (card, badge), Layout, Pages, Contexts
- State: Context API for Theme, Filter, Search (avoid Redux for POC simplicity)
- Data Layer: src/data/mockData.js generates 97 projects, deterministic + random mix to match totals
- Styling: Tailwind with custom telkom palette, darkMode class, glassmorphism cards
- Routing: React Router v6, Protected route via localStorage flag
- Charts: Recharts - BarChart, PieChart, ResponsiveContainer
- Icons: Lucide, custom SVG, emoji for speed

**Performance:**
- useMemo for filteredProjects, kpis to avoid recompute
- Slice tables to 25-30 rows for render performance
- Lazy not needed for POC size

**Vercel Deployment:**
- vercel.json rewrite to index.html for SPA
- No backend, 100% static
- Build: vite build -> dist
- Env: No env needed, pure mocked

**Security (POC):**
- Mocked auth only, no JWT for POC
- For production: Replace with Telkom SSO, JWT, RBAC

**Scalability Path:**
- Replace mockData.js with REST API calls (axios, React Query)
- Add /api/projects, /api/analytics, /api/mitra
- Backend: Spring Boot / Node / Go with PostgreSQL
- Add pagination, server-side filtering
- Add export Excel/PDF (Cetak button)

### 7. UI/UX Specifications (Pixel-matched)

**Colors:**
- Primary Telkom Red: #C1272D, hover #A51E23
- Background Light: #fdf8f7, Card: white #ffffff, Border: #f0e0e0
- Background Dark: #0f0a0a, Card Dark: #1a1212, Border Dark: #2a1e1e
- Text Light: #2d1a1a, Secondary: #6b4a4a, Tertiary: #a89090

**Typography:** Inter, 11px labels tracking-widest for section headers, 32-40px black for titles, 12-14px for body

**Components:**
- KPI cards: rounded-2xl, border, shadow-card, border-t-3px red for analytics
- Badges: rounded, px-2 py-0.5, text 10-11px bold, bg colors per status
- Buttons: rounded-full for primary, rounded-lg for secondary, shadow-telkom
- Tables: thead bg #fdf2f2, th 11px bold, td 12-13px, border-t #f5e5e5
- Charts: Bar radius 6, color #C1272D

**Dark Mode:**
- Toggle in header, saves to localStorage
- Class toggle on html, Tailwind dark: variants
- Matches Screenshot_43.png dark dashboard

### 8. API Contract (For Future Backend)

```
GET /api/projects?am=&segment=&province=&search=
GET /api/kpis?am=&segment=&province=
GET /api/analytics/am?filter=
GET /api/mitras
GET /api/status-breakdown
POST /api/auth/login {username, password} -> {token, user}
```

Replace genProjects() with fetch in FilterContext.

### 9. Testing & QA
- Manual: Filter combinations, Search modal, Dark mode toggle, Responsive (mobile nav)
- No filter crash: Ensure safe array handling (no o.filter errors)
- Data integrity: Totals match 55.03M, 16.09M

### 10. Deployment Checklist
- [x] 100% mocked, no backend calls
- [x] vite build passes
- [x] vercel.json SPA rewrite
- [x] Dark/light working
- [x] Search modal Ctrl+K
- [x] All routes /dashboard /analytics /projects /database /login
- [x] Responsive mobile
- [x] Login mocked
- [x] Charts render

### 11. Deliverables
- Zip: telkom-enterprise-dashboard.zip (Vercel ready)
- FSD: This document
- Screenshots matched: Login, Dashboard Overview (light/dark), Analytics, Projects, Data Monitoring, Search Modal

### 12. Next Steps for Production
- Integrate Telkom SSO
- Connect real spreadsheet/DB (Google Sheets API / PostgreSQL)
- Add role-based filtering
- Add export Excel
- Add real-time updates via WebSocket
- Add audit logs

---
Built as 12yr FSD + Architect - 100% Vercel Mocked POC - Ready for Telkom Enterprise demo
