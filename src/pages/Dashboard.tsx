import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from 'recharts';
import { Filter, Plus, GitPullRequest, ShieldCheck, AlertTriangle, ShieldAlert, ExternalLink } from 'lucide-react';
import { ACTIVITIES } from '../constants';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const BAR_DATA = [
  { name: 'Core-API', approved: 60, warnings: 25, failures: 15 },
  { name: 'Auth-Service', approved: 20, warnings: 10, failures: 70 },
  { name: 'UI-Dashboard', approved: 5, warnings: 5, failures: 90 },
];

const PIE_DATA = [
  { name: 'Critical', value: 75, color: '#ff6e84' },
  { name: 'Warnings', value: 20, color: '#ffb148' },
  { name: 'Approved', value: 5, color: '#69f6b8' },
];

export function Dashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="font-headline text-4xl font-extrabold text-on-surface tracking-tight">Security Summary</h2>
          <p className="text-on-surface-variant font-body mt-2">Overview of code integrity and CI/CD pipelines.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-surface-container-low text-on-surface px-5 py-2.5 rounded-xl font-label text-sm border border-on-surface-variant/10 hover:bg-surface-highest transition-all flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filter Period
          </button>
          <button className="bg-gradient-to-tr from-primary to-primary-dim text-on-primary px-5 py-2.5 rounded-xl font-label text-sm font-bold shadow-lg shadow-primary/20 hover:scale-95 transition-all flex items-center gap-2">
            <Plus className="w-4 h-4" /> New Scan
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total PRs', value: '4', icon: GitPullRequest, color: 'text-primary', bg: 'bg-primary/10' },
          { label: 'Approved', value: '0', icon: ShieldCheck, color: 'text-secondary', bg: 'bg-secondary/10' },
          { label: 'Warnings', value: '1', icon: AlertTriangle, color: 'text-tertiary', bg: 'bg-tertiary/10' },
          { label: 'Critical Failures', value: '3', icon: ShieldAlert, color: 'text-error', bg: 'bg-error/10' },
        ].map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="surface-container-low p-6 rounded-xl border border-on-surface-variant/10 ambient-glow group hover:bg-surface-container transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <span className={cn("w-10 h-10 rounded-lg flex items-center justify-center", stat.bg, stat.color)}>
                <stat.icon className="w-6 h-6" />
              </span>
              <span className="text-[10px] font-label text-on-surface-variant bg-surface-highest px-2 py-1 rounded">Live</span>
            </div>
            <div className="space-y-1">
              <p className="text-4xl font-headline font-black text-on-surface">{stat.value}</p>
              <p className="text-sm font-body text-on-surface-variant">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 glass-card rounded-2xl p-8 border border-on-surface-variant/10 relative overflow-hidden">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="font-headline text-xl font-bold">Quality by Repository</h3>
              <p className="text-sm text-on-surface-variant font-body">Comparative vulnerability analysis</p>
            </div>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={BAR_DATA} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#22262f" horizontal={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" stroke="#a9abb3" fontSize={12} width={100} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#161a21', border: '1px solid #22262f', borderRadius: '12px' }}
                  itemStyle={{ fontSize: '12px' }}
                />
                <Bar dataKey="approved" stackId="a" fill="#69f6b8" radius={[0, 0, 0, 0]} />
                <Bar dataKey="warnings" stackId="a" fill="#ffb148" />
                <Bar dataKey="failures" stackId="a" fill="#ff6e84" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-4 glass-card rounded-2xl p-8 border border-on-surface-variant/10 flex flex-col items-center">
          <div className="text-center w-full mb-6">
            <h3 className="font-headline text-xl font-bold">Decision History</h3>
            <p className="text-sm text-on-surface-variant font-body mt-1">Recent review outcomes</p>
          </div>
          
          <div className="h-[200px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={PIE_DATA}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {PIE_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-3xl font-headline font-black">75%</span>
              <span className="text-[10px] font-label uppercase tracking-widest text-error">Critical</span>
            </div>
          </div>

          <div className="w-full mt-8 space-y-3">
            {PIE_DATA.map(item => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm font-body">{item.name}</span>
                </div>
                <span className="font-label font-bold text-on-surface">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-card rounded-2xl p-8 border border-on-surface-variant/10">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-headline text-xl font-bold">Recent Activity</h3>
          <button className="text-primary hover:underline text-sm font-label">View all logs</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="text-xs font-label uppercase tracking-wider text-on-surface-variant border-b border-on-surface-variant/10">
              <tr>
                <th className="pb-4 font-normal">Repository</th>
                <th className="pb-4 font-normal">Developer</th>
                <th className="pb-4 font-normal">Status</th>
                <th className="pb-4 font-normal">Time</th>
                <th className="pb-4 font-normal text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-on-surface-variant/5">
              {ACTIVITIES.map((act) => (
                <tr key={act.id} className="group hover:bg-on-surface-variant/5 transition-colors">
                  <td className="py-4 font-body font-medium">{act.repo}</td>
                  <td className="py-4 flex items-center gap-2">
                    <img 
                      src={act.developerAvatar} 
                      alt={act.developer} 
                      className="w-6 h-6 rounded-full"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-sm">{act.developer}</span>
                  </td>
                  <td className="py-4">
                    <span className={cn(
                      "inline-flex items-center px-2 py-0.5 rounded text-[10px] font-label font-bold",
                      act.status.includes('CRÍTICA') ? "bg-error/10 text-error" : "bg-tertiary/10 text-tertiary"
                    )}>
                      {act.status}
                    </span>
                  </td>
                  <td className="py-4 text-sm text-on-surface-variant">{act.time}</td>
                  <td className="py-4 text-right">
                    <button className="text-on-surface-variant hover:text-primary transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
