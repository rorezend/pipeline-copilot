import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="text-center py-16">
        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
          Prototype · Mock Data Only
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          Pipeline <span className="text-emerald-400">Copilot</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Turn meetings into pipeline. Turn milestones into committed progress.
          An AI-powered assistant for Sales Specialists.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/meetings"
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors"
          >
            Try Meeting → Pipeline
          </Link>
          <Link
            to="/u2c"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold rounded-lg border border-gray-700 transition-colors"
          >
            Try U2C Queue
          </Link>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
          <h2 className="text-lg font-bold text-red-400 mb-3">😩 The Problem</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>• Meetings generate action but not pipeline entries</li>
            <li>• Milestones sit uncommitted with no structured comments</li>
            <li>• Manual CRM updates eat hours of SE time</li>
            <li>• No consistent format for milestone readiness</li>
          </ul>
        </div>
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
          <h2 className="text-lg font-bold text-emerald-400 mb-3">✅ The Solution</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>• <strong>Create Agent:</strong> Generates opportunity drafts from meeting transcripts</li>
            <li>• <strong>Commit Prep Agent:</strong> Auto-generates structured comments for milestones</li>
            <li>• <strong>Readiness Checklist:</strong> Heuristic-based go/no-go signals</li>
            <li>• <strong>One-click paste:</strong> Simulates writeback to MSX</li>
          </ul>
        </div>
      </section>

      {/* Demo Steps */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: '1', title: 'Select a Meeting', desc: 'Pick a recent customer meeting from the list. The transcript is already captured.' },
            { step: '2', title: 'Generate Pipeline Draft', desc: 'The Create Agent analyzes the transcript and proposes an opportunity with milestones.' },
            { step: '3', title: 'Commit with Comments', desc: 'The Commit Prep Agent generates structured comments and pastes them to your CRM.' },
          ].map(s => (
            <div key={s.step} className="bg-gray-900 rounded-xl p-6 border border-gray-800 text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-lg flex items-center justify-center mx-auto mb-3">
                {s.step}
              </div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
