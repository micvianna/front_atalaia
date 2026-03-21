import React, { useState } from 'react';
import { Search, ChevronDown, Shield, SearchCheck, GitPullRequest, AlertTriangle, ShieldAlert, ShieldCheck } from 'lucide-react';
import { PULL_REQUESTS } from '../constants';
import { PullRequest } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export function InterventionQueue() {
  const [selectedPr, setSelectedPr] = useState<PullRequest | null>(null);

  return (
    <div className="h-[calc(100vh-64px)] flex overflow-hidden -m-8">
      {/* Sidebar List */}
      <aside className="w-[400px] flex-shrink-0 bg-surface-low flex flex-col border-r border-on-surface-variant/5">
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-headline font-bold text-xl tracking-tight">Intervention Queue</h2>
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
              {PULL_REQUESTS.length} Pending
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <select className="appearance-none w-full bg-surface-highest text-on-surface text-[10px] font-label py-2.5 px-4 rounded-xl border-none focus:ring-1 focus:ring-primary">
                <option>All Status</option>
                <option>Failed</option>
                <option>Review Needed</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-on-surface-variant pointer-events-none" />
            </div>
            <div className="relative">
              <select className="appearance-none w-full bg-surface-highest text-on-surface text-[10px] font-label py-2.5 px-4 rounded-xl border-none focus:ring-1 focus:ring-primary">
                <option>All Repos</option>
                <option>Sapatos-Girl</option>
                <option>Core-API</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-on-surface-variant pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-6 space-y-3">
          {PULL_REQUESTS.map((pr) => (
            <button 
              key={pr.id}
              onClick={() => setSelectedPr(pr)}
              className={cn(
                "w-full text-left p-4 rounded-2xl transition-all border-l-2 group",
                selectedPr?.id === pr.id ? "bg-surface-container-high border-primary" : "bg-surface-container border-transparent hover:bg-surface-container-high",
                pr.status === 'reprovado' && "border-l-error",
                pr.status === 'revisao' && "border-l-tertiary",
                pr.status === 'analise' && "border-l-on-surface-variant/30"
              )}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="font-label text-[10px] text-on-surface-variant tracking-widest uppercase">{pr.repo}</span>
                <span className="text-[10px] text-on-surface-variant font-label">{pr.time}</span>
              </div>
              <h3 className="font-body font-semibold text-sm mb-3 group-hover:text-primary transition-colors">{pr.title}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-error" />
                    <span className="text-[11px] font-label text-error">{pr.critical}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-tertiary" />
                    <span className="text-[11px] font-label text-tertiary">{pr.warnings}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-[11px] font-label text-secondary">{pr.success}</span>
                  </div>
                </div>
                <span className={cn(
                  "text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter",
                  pr.status === 'reprovado' && "bg-error/10 text-error",
                  pr.status === 'revisao' && "bg-tertiary/10 text-tertiary",
                  pr.status === 'analise' && "bg-on-surface-variant/10 text-on-surface-variant"
                )}>
                  {pr.status}
                </span>
              </div>
              <div className="mt-3 text-[11px] text-on-surface-variant font-body">PR #{pr.number}</div>
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content Area */}
      <section className="flex-1 relative flex items-center justify-center overflow-hidden bg-surface">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        
        <AnimatePresence mode="wait">
          {!selectedPr ? (
            <motion.div 
              key="empty"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative z-10 text-center max-w-md px-8"
            >
              <div className="mb-10 inline-flex p-6 rounded-[2.5rem] bg-surface-highest/50 backdrop-blur-xl border border-on-surface-variant/10 shadow-2xl">
                <div className="relative">
                  <Shield className="w-24 h-24 text-primary opacity-20" />
                  <SearchCheck className="w-12 h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary" />
                </div>
              </div>
              <h2 className="font-headline font-extrabold text-3xl mb-4 tracking-tight text-on-surface">
                No PR Selected
              </h2>
              <p className="font-body text-on-surface-variant text-base leading-relaxed mb-8">
                Select a Pull Request from the queue on the left to view detected vulnerabilities and perform necessary intervention.
              </p>
              <div className="flex items-center justify-center gap-2 px-4 py-2 bg-surface-container rounded-full border border-on-surface-variant/10">
                <span className="text-primary font-bold tracking-tighter font-headline text-lg">Atalaia</span>
                <span className="text-xs font-label text-on-surface-variant opacity-60">Intelligence Systems</span>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="details"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full h-full p-12 overflow-y-auto"
            >
              <div className="max-w-4xl mx-auto space-y-10">
                <header className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h1 className="text-4xl font-headline font-extrabold tracking-tight text-on-surface">
                        {selectedPr.author}/{selectedPr.repo} #{selectedPr.number}
                      </h1>
                      <span className={cn(
                        "px-3 py-1 rounded-full text-xs font-bold border",
                        selectedPr.status === 'reprovado' ? "bg-error/10 text-error border-error/30" : "bg-secondary/10 text-secondary border-secondary/30"
                      )}>
                        {selectedPr.status}
                      </span>
                    </div>
                    <p className="text-on-surface-variant flex items-center gap-2">
                      <GitPullRequest className="w-4 h-4" />
                      {selectedPr.branch} <span className="text-on-surface-variant/40">→</span> {selectedPr.target}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-6 py-3 bg-surface-highest text-on-surface rounded-xl font-semibold flex items-center gap-2 hover:bg-surface-variant transition-all border border-on-surface-variant/10">
                      View Logs
                    </button>
                    <button className="px-6 py-3 bg-gradient-to-r from-primary to-primary-dim text-on-primary rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                      Open on GitHub
                    </button>
                  </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 glass-card p-8 rounded-3xl border border-on-surface-variant/10">
                    <h3 className="font-headline font-bold text-2xl mb-6 text-on-surface flex items-center gap-3">
                      General Summary
                    </h3>
                    <div className="space-y-4 text-on-surface-variant leading-relaxed">
                      <p>{selectedPr.description}</p>
                      <p>This Pull Request introduces significant changes to the payment processing core. While the business logic for new payment methods seems correct, the implementation fails critical security requirements and company coding standards.</p>
                      <p>Analysis detected <span className="text-error font-bold">{selectedPr.critical} critical vulnerabilities</span> related to sensitive data exposure and lack of input sanitization in public routes.</p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mt-8">
                      <div className="bg-surface-container p-4 rounded-2xl border border-on-surface-variant/5">
                        <p className="text-[10px] font-label text-on-surface-variant mb-1 uppercase">Vulnerabilities</p>
                        <p className="text-2xl font-bold text-error">{selectedPr.critical + selectedPr.warnings}</p>
                      </div>
                      <div className="bg-surface-container p-4 rounded-2xl border border-on-surface-variant/5">
                        <p className="text-[10px] font-label text-on-surface-variant mb-1 uppercase">Test Coverage</p>
                        <p className="text-2xl font-bold text-tertiary">42%</p>
                      </div>
                      <div className="bg-surface-container p-4 rounded-2xl border border-on-surface-variant/5">
                        <p className="text-[10px] font-label text-on-surface-variant mb-1 uppercase">Complexity</p>
                        <p className="text-2xl font-bold text-secondary">A+</p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card p-8 rounded-3xl border border-on-surface-variant/10 flex flex-col justify-between">
                    <div>
                      <h3 className="font-headline font-bold text-xl mb-6 text-on-surface">Design Patterns</h3>
                      <div className="space-y-4">
                        {[
                          { label: 'Clean Architecture', ok: true },
                          { label: 'SOLID Compliance', ok: false },
                          { label: 'DRY Principle', ok: true },
                        ].map(item => (
                          <div key={item.label} className="flex items-center justify-between">
                            <span className="text-sm font-medium">{item.label}</span>
                            {item.ok ? <ShieldCheck className="w-5 h-5 text-secondary" /> : <AlertTriangle className="w-5 h-5 text-tertiary" />}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-on-surface-variant/10">
                      <h4 className="text-[10px] font-label text-on-surface-variant uppercase mb-4 tracking-widest">Review Conclusion</h4>
                      <p className="text-sm italic text-on-surface-variant">"The code presents good abstraction practices but ignores fundamental access controls. Immediate refactoring of the middleware layer is recommended."</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="font-headline font-bold text-2xl text-on-surface">Findings by Severity</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { 
                        title: 'Blockers', 
                        status: 'REJECTED', 
                        color: 'bg-error', 
                        items: ['Missing JWT validation', 'Potential SQL Injection'] 
                      },
                      { 
                        title: 'Important', 
                        status: 'REVIEW', 
                        color: 'bg-tertiary', 
                        items: ['Missing unit tests', 'Long functions (>50 lines)'] 
                      },
                      { 
                        title: 'Suggestions', 
                        status: 'APPROVED', 
                        color: 'bg-secondary', 
                        items: ['Strict typing', 'Early Return pattern'] 
                      },
                    ].map(group => (
                      <div key={group.title} className="bg-surface-container-low rounded-3xl p-6 border border-on-surface-variant/10 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className={cn("w-2 h-8 rounded-full", group.color)} />
                            <span className="font-bold text-on-surface">{group.title}</span>
                          </div>
                          <span className={cn("text-[8px] px-2 py-1 rounded font-bold text-white", group.color)}>
                            {group.status}
                          </span>
                        </div>
                        <ul className="space-y-4 flex-1">
                          {group.items.map(item => (
                            <li key={item} className="p-4 rounded-2xl bg-surface-container-highest/50 border border-on-surface-variant/10 hover:border-primary/30 transition-colors">
                              <p className="text-sm font-bold text-on-surface mb-1">{item}</p>
                              <p className="text-[10px] text-on-surface-variant">Detected in middleware/auth.ts and services/payment.ts</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
