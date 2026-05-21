import { useState } from 'react';
import { getData, getAccountName } from '../store';
import { generatePipelineDraft } from '../agents/createAgent';
import type { Meeting, OpportunityDraft } from '../types';

export default function Meetings() {
  const data = getData();
  const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null);
  const [draft, setDraft] = useState<OpportunityDraft | null>(null);

  const handleGenerate = () => {
    if (!selectedMeeting) return;
    const result = generatePipelineDraft(selectedMeeting);
    setDraft(result);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-1">Meeting → Pipeline</h1>
        <p className="text-gray-400 text-sm">Select a meeting to generate an opportunity draft with milestones.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Meeting List */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Recent Meetings</h2>
          {data.meetings.map(m => (
            <button
              key={m.id}
              onClick={() => { setSelectedMeeting(m); setDraft(null); }}
              className={`w-full text-left p-4 rounded-lg border transition-colors ${
                selectedMeeting?.id === m.id
                  ? 'bg-emerald-500/10 border-emerald-500/40'
                  : 'bg-gray-900 border-gray-800 hover:border-gray-600'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-sm">{m.title}</span>
                <span className="text-xs text-gray-500">{m.date}</span>
              </div>
              <div className="text-xs text-gray-500">
                {getAccountName(m.accountId)} · {m.attendees.length} attendees
              </div>
            </button>
          ))}
        </div>

        {/* Detail / Draft */}
        <div>
          {selectedMeeting && !draft && (
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 space-y-4">
              <h2 className="font-bold">{selectedMeeting.title}</h2>
              <div className="text-xs text-gray-500">
                {selectedMeeting.date} · {getAccountName(selectedMeeting.accountId)}
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">Attendees</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedMeeting.attendees.map(a => (
                    <span key={a} className="text-xs bg-gray-800 px-2 py-1 rounded">{a}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">Transcript</h3>
                <p className="text-sm text-gray-300 leading-relaxed bg-gray-800/50 p-3 rounded">
                  {selectedMeeting.transcript}
                </p>
              </div>
              <button
                onClick={handleGenerate}
                className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors"
              >
                ⚡ Generate Pipeline Draft
              </button>
            </div>
          )}

          {draft && (
            <div className="bg-gray-900 rounded-xl border border-emerald-500/30 p-6 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-emerald-400 text-lg">✓</span>
                <h2 className="font-bold text-emerald-400">Draft Generated</h2>
              </div>

              <div className="space-y-3">
                <Field label="Opportunity" value={draft.name} />
                <Field label="Account" value={getAccountName(draft.accountId)} />
                <Field label="Stage" value={`Stage ${draft.stage}`} />
                <Field label="Est. Revenue" value={`$${draft.estimatedRevenue.toLocaleString()}`} />
                <Field label="Target Close" value={draft.suggestedCloseDate} />
              </div>

              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">Suggested Milestones</h3>
                <div className="space-y-2">
                  {draft.milestones.map((ms, i) => (
                    <div key={i} className="bg-gray-800 rounded p-3 text-sm">
                      <div className="font-medium">{ms.title}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        Stage {ms.stage} · Due {ms.dueDate} · {ms.owner}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => { setDraft(null); setSelectedMeeting(null); }}
                className="w-full py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm transition-colors"
              >
                ← Back to Meetings
              </button>
            </div>
          )}

          {!selectedMeeting && (
            <div className="flex items-center justify-center h-64 text-gray-600 text-sm">
              Select a meeting to get started
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-xs text-gray-500 w-28 shrink-0">{label}</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}
