import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Topbar } from './components/Topbar';
import { Dashboard } from './pages/Dashboard';
import { InterventionQueue } from './pages/InterventionQueue';
import { Settings } from './pages/Settings';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex">
        <Sidebar />
        <div className="flex-1 flex flex-col ml-20">
          <Topbar />
          <main className="flex-1 p-8 pt-24">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/queue" element={<InterventionQueue />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          
          <footer className="flex flex-col items-center justify-center space-y-4 w-full py-8 border-t border-on-surface-variant/5">
            <p className="text-[10px] font-medium font-label tracking-widest uppercase text-on-surface-variant">
              © 2026 Atalaia DevSecOps. Sovereign Sentinel Intelligence.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-[10px] font-medium font-label tracking-widest uppercase text-on-surface-variant hover:text-primary transition-all opacity-70 hover:opacity-100">Privacy Policy</a>
              <a href="#" className="text-[10px] font-medium font-label tracking-widest uppercase text-on-surface-variant hover:text-primary transition-all opacity-70 hover:opacity-100">Terms of Service</a>
              <a href="#" className="text-[10px] font-medium font-label tracking-widest uppercase text-on-surface-variant hover:text-primary transition-all opacity-70 hover:opacity-100">Security Disclosure</a>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  );
}
