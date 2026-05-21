import type { Meeting, OpportunityDraft, MilestoneDraft } from '../types';
import { getData, getAccountName } from '../store';

export function generatePipelineDraft(meeting: Meeting): OpportunityDraft {
  const data = getData();
  const account = data.accounts.find(a => a.id === meeting.accountId);
  const accountName = account?.name ?? 'Unknown';
  const transcript = meeting.transcript.toLowerCase();

  // Determine stage from transcript language
  const stage = (transcript.includes('production') || transcript.includes('expand') || transcript.includes('rollout'))
    ? 2 : 1;

  // Extract a keyword for the opportunity name
  const keywords = ['azure openai', 'copilot', 'sql migration', 'github copilot', 'data migration', 'ai platform'];
  const keyword = keywords.find(k => transcript.includes(k)) ?? 'Digital Transformation';
  const oppName = `${accountName} - ${keyword.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')} Opportunity`;

  // Estimate revenue from transcript
  let revenue = 100000;
  const revenueMatch = meeting.transcript.match(/\$(\d+)K/i);
  if (revenueMatch) revenue = parseInt(revenueMatch[1]) * 1000;

  const quarterEnd = data.quarterEnd;

  // Generate 2-3 milestones
  const milestones: MilestoneDraft[] = [];

  if (transcript.includes('deep-dive') || transcript.includes('technical') || transcript.includes('assessment')) {
    milestones.push({
      title: `Technical Assessment - ${accountName}`,
      stage: 1,
      dueDate: addDays(meeting.date, 7),
      owner: data.currentUser.name,
    });
  }

  if (transcript.includes('poc') || transcript.includes('proof of concept') || transcript.includes('pilot') || transcript.includes('trial')) {
    milestones.push({
      title: `POC / Pilot Execution - ${accountName}`,
      stage: 2,
      dueDate: addDays(meeting.date, 30),
      owner: data.currentUser.name,
    });
  }

  if (transcript.includes('proposal') || transcript.includes('pricing') || transcript.includes('business case')) {
    milestones.push({
      title: `Business Case & Proposal - ${accountName}`,
      stage: stage,
      dueDate: addDays(meeting.date, 14),
      owner: data.currentUser.name,
    });
  }

  // Always add a follow-up milestone
  milestones.push({
    title: `Follow-up: ${meeting.title}`,
    stage: stage,
    dueDate: addDays(meeting.date, 7),
    owner: data.currentUser.name,
  });

  return {
    name: oppName,
    accountId: meeting.accountId,
    stage,
    estimatedRevenue: revenue,
    suggestedCloseDate: quarterEnd,
    milestones: milestones.slice(0, 3),
  };
}

function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}
