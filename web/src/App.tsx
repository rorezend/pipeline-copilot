import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Hero from './pages/Hero';
import Meetings from './pages/Meetings';
import U2CQueue from './pages/U2CQueue';
import MilestoneDetail from './pages/MilestoneDetail';
import { loadPersistedState } from './store';

function Nav() {
  const loc = useLocation();
  const links = [
    { to: '/', label: 'Home' },
    { to: '/meetings', label: 'Meetings' },
    { to: '/u2c', label: 'U2C Queue' },
  ];
  return (
    <nav className="bg-gray-900 border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4 flex items-center h-14 gap-6">
        <Link to="/" className="text-lg font-bold text-emerald-400 tracking-tight">
          Pipeline Copilot
        </Link>
        <div className="flex gap-1">
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
      </div>
    </nav>
  );
}

export default function App() {
  useEffect(() => { loadPersistedState(); }, []);

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
