import type { MockData, Milestone } from './types';
import rawData from '../../mock/data.json';

const data: MockData = JSON.parse(JSON.stringify(rawData));

export function getData(): MockData {
  return data;
}

export function getAccountName(accountId: string): string {
  return data.accounts.find(a => a.id === accountId)?.name ?? 'Unknown';
}

export function getMilestoneById(id: string): Milestone | undefined {
  return data.milestones.find(m => m.id === id);
}

export function updateMilestone(id: string, updates: Partial<Milestone>): void {
  const idx = data.milestones.findIndex(m => m.id === id);
  if (idx !== -1) {
    data.milestones[idx] = { ...data.milestones[idx], ...updates };
  }
  persistState();
}

function persistState(): void {
  try {
    localStorage.setItem('pipeline-copilot-state', JSON.stringify({
      milestones: data.milestones,
      opportunities: data.opportunities,
    }));
  } catch { /* noop in SSR */ }
}

export function loadPersistedState(): void {
  try {
    const saved = localStorage.getItem('pipeline-copilot-state');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.milestones) data.milestones = parsed.milestones;
      if (parsed.opportunities) data.opportunities = parsed.opportunities;
    }
  } catch { /* noop */ }
}
