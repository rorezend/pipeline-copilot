import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getData, getAccountName } from '../store';
import { runCommitPrep } from '../agents/commitPrepAgent';
import type { Milestone } from '../types';

export default function U2CQueue() {
  const data = getData();
  const [milestones, setMilestones] = useState<Milestone[]>(data.milestones);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [filterAccount, setFilterAccount] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [processing, setProcessing] = useState(false);

  const uncommitted = useMemo(() => {
    return milestones.filter(m => {
      if (m.committed) return false;
      if (filterAccount !== 'all' && m.accountId !== filterAccount) return false;
      if (filterStatus !== 'all' && m.status !== filterStatus) return false;
      return true;
    });
  }, [milestones, filterAccount, filterStatus]);

  const toggleSelect = (id: string) => {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const selectAll = () => {
    if (selected.size === uncommitted.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(uncommitted.map(m => m.id)));
    }
  };

  const handleAutoPaste = () => {
    setProcessing(true);
    // Simulate async processing
    setTimeout(() => {
      selected.forEach(id => {
        const ms = milestones.find(m => m.id === id);
        if (ms) runCommitPrep(ms);
      });
      // Refresh from store
      setMilestones([...getData().milestones]);
      setSelected(new Set());
      setProcessing(false);
    }, 800);
  };

  const statuses = ['On Track', 'At Risk', 'Not Started', 'Blocked'];
  const today = new Date();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">U2C / Hygiene Queue</h1>
          <p className="text-gray-400 text-sm">
            Uncommitted milestones due by {data.quarterEnd}. Select and auto-paste comments.
          </p>
        </div>
        <button
          onClick={handleAutoPaste}
          disabled={selected.size === 0 || processing}
          className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
            selected.size > 0 && !processing
              ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
              : 'bg-gray-800 text-gray-500 cursor-not-allowed'
          }`}
        >
          {processing ? 'Processing...' : `⚡ Auto-paste Comments (${selected.size})`}
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <select
          value={filterAccount}
          onChange={e => setFilterAccount(e.target.value)}
          className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300"
        >
          <option value="all">All Accounts</option>
          {data.accounts.map(a => (
            <option key={a.id} value={a.id}>{a.name}</option>
          ))}
        </select>
        <select
          value={filterStatus}
          onChange={e => setFilterStatus(e.target.value)}
          className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300"
        >
          <option value="all">All Statuses</option>
          {statuses.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-800 text-gray-500 text-xs uppercase">
              <th className="p-3 text-left w-10">
                <input
                  type="checkbox"
                  checked={selected.size === uncommitted.length && uncommitted.length > 0}
                  onChange={selectAll}
                  className="accent-emerald-500"
                />
              </th>
              <th className="p-3 text-left">Milestone</th>
              <th className="p-3 text-left">Account</th>
              <th className="p-3 text-left">Stage</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Due Date</th>
              <th className="p-3 text-left">Owner</th>
              <th className="p-3 text-left">Comment</th>
            </tr>
          </thead>
          <tbody>
            {uncommitted.map(m => {
              const due = new Date(m.dueDate);
              const overdue = due < today;
              return (
                <tr key={m.id} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                  <td className="p-3">
                    <input
                      type="checkbox"
                      checked={selected.has(m.id)}
                      onChange={() => toggleSelect(m.id)}
                      className="accent-emerald-500"
                    />
                  </td>
                  <td className="p-3">
                    <Link to={`/milestones/${m.id}`} className="text-emerald-400 hover:underline font-medium">
                      {m.title}
                    </Link>
                  </td>
                  <td className="p-3 text-gray-400">{getAccountName(m.accountId)}</td>
                  <td className="p-3 text-gray-400">S{m.stage}</td>
                  <td className="p-3">
                    <StatusBadge status={m.status} />
                  </td>
                  <td className={`p-3 ${overdue ? 'text-red-400 font-semibold' : 'text-gray-400'}`}>
                    {m.dueDate} {overdue && '⚠'}
                  </td>
                  <td className="p-3 text-gray-400">{m.owner}</td>
                  <td className="p-3">
                    {m.existingComment ? (
                      <span className="text-xs text-gray-500">Has comment</span>
                    ) : (
                      <span className="text-xs text-yellow-500">Empty</span>
                    )}
                  </td>
                </tr>
              );
            })}
            {uncommitted.length === 0 && (
              <tr>
                <td colSpan={8} className="p-8 text-center text-gray-600">
                  No uncommitted milestones match your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Committed milestones */}
      {milestones.some(m => m.committed) && (
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            ✓ Recently Committed
          </h2>
          <div className="grid gap-3">
            {milestones.filter(m => m.committed).map(m => (
              <Link
                key={m.id}
                to={`/milestones/${m.id}`}
                className="bg-gray-900 rounded-lg border border-emerald-500/20 p-4 flex items-center justify-between hover:border-emerald-500/40 transition-colors"
              >
                <div>
                  <span className="font-medium text-sm">{m.title}</span>
                  <span className="text-xs text-gray-500 ml-3">{getAccountName(m.accountId)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                    m.confidence === 'High' ? 'bg-emerald-500/20 text-emerald-400' :
                    m.confidence === 'Med' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {m.confidence}
                  </span>
                  <span className="text-gray-500 text-xs">View diff →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    'On Track': 'bg-emerald-500/20 text-emerald-400',
    'At Risk': 'bg-yellow-500/20 text-yellow-400',
    'Not Started': 'bg-gray-700 text-gray-400',
    'Blocked': 'bg-red-500/20 text-red-400',
  };
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded ${colors[status] ?? colors['Not Started']}`}>
      {status}
    </span>
  );
}
