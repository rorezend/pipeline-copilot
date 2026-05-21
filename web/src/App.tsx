import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Hero from './pages/Hero';
import Meetings from './pages/Meetings';
import U2CQueue from './pages/U2CQueue';
import MilestoneDetail from './pages/MilestoneDetail';
import { loadPersistedState, resetAllData } from './store';

function Nav() {
  const loc = useLocation();
  const [showReset, setShowReset] = useState(false);
  const links = [
    { to: '/', label: 'Home' },
    { to: '/meetings', label: 'Meetings' },
    { to: '/u2c', label: 'U2C Queue' },
  ];

  const handleReset = () => {
    resetAllData();
    setShowReset(false);
    window.location.href = window.location.pathname + '#/';
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4 flex items-center h-14 gap-6">
        <Link to="/" className="text-lg font-bold text-emerald-400 tracking-tight">
          Pipeline Copilot
        </Link>
        <div className="flex gap-1 flex-1">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                loc.pathname === l.to
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="relative">
          <button
            onClick={() => setShowReset(s => !s)}
            className="text-xs text-gray-500 hover:text-gray-300 px-2 py-1 rounded hover:bg-gray-800 transition-colors"
          >
            ↻ Reset Demo
          </button>
          {showReset && (
            <div className="absolute right-0 top-10 bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-xl z-50 w-64">
              <p className="text-sm text-gray-300 mb-3">Reset all data to original mock state? This clears any generated comments and created opportunities.</p>
              <div className="flex gap-2">
                <button onClick={handleReset} className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded transition-colors">
                  Yes, Reset
                </button>
                <button onClick={() => setShowReset(false)} className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs rounded transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  useEffect(() => { loadPersistedState(); }, []);

  return (
    <HashRouter>
      <div className="min-h-screen bg-gray-950 text-gray-100">
        <Nav />
        <main className="max-w-6xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/u2c" element={<U2CQueue />} />
            <Route path="/milestones/:id" element={<MilestoneDetail />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}
