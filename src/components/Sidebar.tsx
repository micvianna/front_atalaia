import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, Inbox, Users, Settings, LogOut, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';

export function Sidebar() {
  const location = useLocation();

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Inbox, label: 'Intervention', path: '/queue' },
    { icon: Users, label: 'Teams', path: '/teams' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-20 flex flex-col items-center py-6 border-r border-on-surface-variant/5 bg-surface z-50">
      <div className="mb-10">
        <div className="w-10 h-10 rounded-xl bg-primary-dim/10 flex items-center justify-center">
          <ShieldCheck className="w-6 h-6 text-primary" />
        </div>
      </div>

      <nav className="flex flex-col gap-6 flex-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-200",
              isActive 
                ? "text-primary bg-primary/5 border-l-2 border-primary" 
                : "text-on-surface-variant hover:text-on-surface hover:bg-surface-highest"
            )}
            title={item.label}
          >
            <item.icon className="w-6 h-6" />
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <NavLink
          to="/settings"
          className={({ isActive }) => cn(
            "group flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-200",
            isActive 
              ? "text-primary bg-primary/5" 
              : "text-on-surface-variant hover:text-on-surface hover:bg-surface-highest"
          )}
          title="Settings"
        >
          <Settings className="w-6 h-6" />
        </NavLink>
        
        <button 
          className="flex items-center justify-center w-12 h-12 text-on-surface-variant hover:text-error transition-colors"
          title="Logout"
        >
          <LogOut className="w-6 h-6" />
        </button>
      </div>
    </aside>
  );
}
