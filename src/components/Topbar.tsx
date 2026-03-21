import React from 'react';
import { Bell, Search, User, ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export function Topbar() {
  const location = useLocation();
  
  const getPageTitle = () => {
    switch(location.pathname) {
      case '/': return 'Dashboard';
      case '/queue': return 'Intervention Queue';
      case '/settings': return 'Settings';
      default: return 'Atalaia';
    }
  };

  return (
    <header className="fixed top-0 right-0 h-16 z-40 flex justify-between items-center px-8 ml-20 w-[calc(100%-5rem)] bg-surface/80 backdrop-blur-xl border-b border-on-surface-variant/5">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-headline font-extrabold text-on-surface tracking-tight">
          Atalaia DevSecOps
        </h1>
        <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-label uppercase tracking-widest">
          {getPageTitle()}
        </span>
      </div>

      <div className="flex items-center gap-8">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
          <input 
            type="text" 
            placeholder="Search vulnerabilities..." 
            className="bg-surface-container-low border-none rounded-xl pl-10 pr-4 py-2 text-sm w-64 focus:ring-1 focus:ring-primary transition-all placeholder:text-on-surface-variant/40"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="text-on-surface-variant hover:text-on-surface transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full" />
          </button>
          
          <div className="h-8 w-[1px] bg-on-surface-variant/10" />
          
          <button className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors group">
            <div className="w-8 h-8 rounded-full bg-surface-highest overflow-hidden border border-on-surface-variant/20">
              <img 
                src="https://picsum.photos/seed/user/100/100" 
                alt="User Profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </header>
  );
}
