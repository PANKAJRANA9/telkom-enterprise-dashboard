
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Analytics from './pages/Analytics.jsx';
import Projects from './pages/Projects.jsx';
import DataMonitoring from './pages/DataMonitoring.jsx';

function Protected({ children }){
  const auth = localStorage.getItem('telkom-auth');
  if(!auth) return <Navigate to="/login" replace />;
  return children;
}

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Protected><Layout /></Protected>}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="projects" element={<Projects />} />
          <Route path="database" element={<DataMonitoring />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
