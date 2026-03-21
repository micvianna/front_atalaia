import React from 'react';
import { Shield, Globe, Lock, Github, Save, ArrowLeft, Info, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export function Settings() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-10"
    >
      <header className="flex flex-col gap-2">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary-dim transition-colors mb-4 group">
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          <span className="font-label text-xs tracking-wider">Back to Dashboard</span>
        </Link>
        <h1 className="text-4xl font-headline font-extrabold text-on-surface tracking-tight">Advanced Settings</h1>
        <p className="text-on-surface-variant font-body">Configure core project parameters, security agents, and automated enforcement rules.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-12 space-y-8">
          <section className="bg-surface-container-low rounded-xl p-8 border border-on-surface-variant/10 ambient-glow">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-6 h-6 text-primary" />
              <h2 className="font-headline text-xl font-bold">Repository Configuration</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest block ml-1">Project Name</label>
                <input 
                  type="text" 
                  defaultValue="Project Alpha - Sentinel Core"
                  className="w-full bg-surface-container-lowest border border-on-surface-variant/20 rounded-xl py-3 px-4 text-on-surface focus:ring-1 focus:ring-primary transition-all font-body"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest block ml-1">Repo URL</label>
                <div className="relative">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/50" />
                  <input 
                    type="text" 
                    defaultValue="github.com/atalaia-labs/project-alpha"
                    className="w-full bg-surface-container-lowest border border-on-surface-variant/20 rounded-xl py-3 pl-12 pr-4 text-on-surface focus:ring-1 focus:ring-primary transition-all font-body"
                  />
                </div>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest block ml-1">Webhook URL</label>
                <input 
                  type="text" 
                  readOnly
                  value="https://api.atalaia.dev/webhooks/sentinel/09x-v42"
                  className="w-full bg-surface-container-lowest border border-on-surface-variant/20 rounded-xl py-3 px-4 text-primary/80 font-mono text-xs"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest block ml-1">GitHub Token</label>
                <div className="relative">
                  <Github className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/50" />
                  <input 
                    type="password" 
                    defaultValue="ghp_************************"
                    className="w-full bg-surface-container-lowest border border-on-surface-variant/20 rounded-xl py-3 pl-12 pr-4 text-on-surface focus:ring-1 focus:ring-primary transition-all font-body"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest block ml-1">Webhook Secret</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/50" />
                  <input 
                    type="password" 
                    defaultValue="sh_****************"
                    className="w-full bg-surface-container-lowest border border-on-surface-variant/20 rounded-xl py-3 pl-12 pr-4 text-on-surface focus:ring-1 focus:ring-primary transition-all font-body"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              <button className="bg-primary text-on-primary font-bold px-8 py-3 rounded-xl text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2">
                <Save className="w-4 h-4" /> Save Changes
              </button>
            </div>
          </section>

          <section className="bg-surface-container-low rounded-xl p-8 border border-on-surface-variant/10">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-secondary" />
                <h2 className="font-headline text-xl font-bold">Intelligent Agents</h2>
              </div>
              <span className="bg-secondary/10 text-secondary font-label text-[10px] px-2 py-1 rounded-full uppercase tracking-tighter">4 Active</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Vulnerability Scanner', desc: 'Real-time dependency & code analysis', active: true },
                { name: 'AI Logic Guard', desc: 'Business logic & semantic flaw detection', active: true },
                { name: 'Performance Sentinel', desc: 'Latency and memory leak forecasting', active: false },
                { name: 'UX Auditor', desc: 'Simulated human journey verification', active: true },
              ].map(agent => (
                <div key={agent.name} className="flex items-center justify-between p-4 bg-surface-container rounded-xl border border-on-surface-variant/5">
                  <div className="flex items-center gap-4">
                    <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", agent.active ? "bg-secondary/10 text-secondary" : "bg-on-surface-variant/10 text-on-surface-variant")}>
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-sm">{agent.name}</p>
                      <p className="font-body text-[10px] text-on-surface-variant">{agent.desc}</p>
                    </div>
                  </div>
                  <button className={cn(
                    "w-10 h-5 rounded-full relative transition-colors",
                    agent.active ? "bg-secondary" : "bg-surface-highest"
                  )}>
                    <div className={cn(
                      "absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all",
                      agent.active ? "right-0.5" : "left-0.5"
                    )} />
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-error/5 rounded-xl p-8 border border-error/20">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-error" />
              <h2 className="font-headline text-xl font-bold text-error">Danger Zone</h2>
            </div>
            <p className="text-sm text-on-surface-variant mb-6">Irreversible actions that will permanently delete all project data, scan history, and configuration secrets.</p>
            <button className="bg-error text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-error/80 transition-all">
              Delete Project
            </button>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
