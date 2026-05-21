import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMilestoneById, getAccountName, getData } from '../store';
import { runCommitPrep } from '../agents/commitPrepAgent';
import type { Milestone } from '../types';

export default function MilestoneDetail() {
  const { id } = useParams<{ id: string }>();
  const [milestone, setMilestone] = useState<Milestone | undefined>();
  const data = getData();

  useEffect(() => {
    if (id) setMilestone(getMilestoneById(id));
  }, [id]);

  if (!milestone) {
    return (
      <div className="text-center py-16 text-gray-500">
        Milestone not found. <Link to="/u2c" className="text-emerald-400 hover:underline">Back to queue</Link>
      </div>
    );
  }

  const opp = data.opportunities.find(o => o.id === milestone.opportunityId);
  const accountName = getAccountName(milestone.accountId);

  const handleGenerate = () => {
    runCommitPrep(milestone);
    setMilestone({ ...getMilestoneById(milestone.id)! });
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <Link to="/u2c" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
        ← Back to U2C Queue
      </Link>

      {/* Header */}
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-xl font-bold mb-1">{milestone.title}</h1>
            <p className="text-sm text-gray-400">
              {accountName} · {opp?.name ?? 'Unknown Opportunity'}
            </p>
          </div>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded ${
            milestone.status === 'On Track' ? 'bg-emerald-500/20 text-emerald-400' :
            milestone.status === 'At Risk' ? 'bg-yellow-500/20 text-yellow-400' :
            'bg-gray-700 text-gray-400'
          }`}>
            {milestone.status}
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <InfoCell label="Stage" value={`Stage ${milestone.stage}`} />
          <InfoCell label="Due Date" value={milestone.dueDate} warn={new Date(milestone.dueDate) < new Date()} />
          <InfoCell label="Owner" value={milestone.owner} />
          <InfoCell label="Committed" value={milestone.committed ? 'Yes ✓' : 'No'} />
        </div>
      </div>

      {/* Comment Diff */}
      {milestone.generatedComment ? (
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Comment Diff</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-900 rounded-xl border border-red-500/20 p-5">
              <h3 className="text-xs font-semibold text-red-400 uppercase mb-3">Before</h3>
              <pre className="text-sm text-gray-400 whitespace-pre-wrap font-mono leading-relaxed bg-red-500/5 p-3 rounded">
                {milestone.existingComment || '(empty — no comment)'}
              </pre>
            </div>
            <div className="bg-gray-900 rounded-xl border border-emerald-500/20 p-5">
              <h3 className="text-xs font-semibold text-emerald-400 uppercase mb-3">After (Generated)</h3>
              <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono leading-relaxed bg-emerald-500/5 p-3 rounded">
                {milestone.generatedComment}
              </pre>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 text-center">
          <p className="text-gray-400 mb-4">No generated comment yet.</p>
          <button
            onClick={handleGenerate}
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors"
          >
            ⚡ Generate Comment
          </button>
        </div>
      )}

      {/* Readiness Checklist */}
      {milestone.readiness && (
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Readiness Checklist</h2>
            <span className={`text-sm font-semibold px-3 py-1 rounded ${
              milestone.confidence === 'High' ? 'bg-emerald-500/20 text-emerald-400' :
              milestone.confidence === 'Med' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              Confidence: {milestone.confidence}
            </span>
          </div>
          <div className="space-y-3">
            <CheckItem label="Sponsor Identified" checked={milestone.readiness.sponsorIdentified} />
            <CheckItem label="Technical Validation" checked={milestone.readiness.technicalValidation} />
            <CheckItem label="Budget Confirmed" checked={milestone.readiness.budgetConfirmed} />
            <CheckItem label="No Blockers" checked={milestone.readiness.noBlockers} />
            <CheckItem label="Urgency High" checked={milestone.readiness.urgencyHigh} />
          </div>
        </div>
      )}
    </div>
  );
}

function InfoCell({ label, value, warn }: { label: string; value: string; warn?: boolean }) {
  return (
    <div>
      <div className="text-xs text-gray-500 mb-1">{label}</div>
      <div className={`text-sm font-medium ${warn ? 'text-red-400' : ''}`}>{value}</div>
    </div>
  );
}

function CheckItem({ label, checked }: { label: string; checked: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`w-5 h-5 rounded flex items-center justify-center text-xs ${
        checked ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/10 text-red-400'
      }`}>
        {checked ? '✓' : '✗'}
      </span>
      <span className={`text-sm ${checked ? 'text-gray-300' : 'text-gray-500'}`}>{label}</span>
    </div>
  );
}
