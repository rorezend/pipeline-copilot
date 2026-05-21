import type { Milestone, ReadinessChecklist } from '../types';
import { getData, getAccountName, updateMilestone } from '../store';

export interface CommitPrepResult {
  milestoneId: string;
  comment: string;
  readiness: ReadinessChecklist;
  confidence: string;
}

export function runCommitPrep(milestone: Milestone): CommitPrepResult {
  const data = getData();
  const accountName = getAccountName(milestone.accountId);
  const dueDate = new Date(milestone.dueDate);
  const today = new Date();
  const daysUntilDue = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  // Readiness checklist heuristics
  const readiness: ReadinessChecklist = {
    sponsorIdentified: milestone.stage >= 2,
    technicalValidation: milestone.stage >= 2 && milestone.status === 'On Track',
    budgetConfirmed: milestone.stage >= 3,
    noBlockers: milestone.status !== 'At Risk' && milestone.status !== 'Blocked',
    urgencyHigh: daysUntilDue <= 30,
  };

  // Confidence
  const positiveSignals = Object.values(readiness).filter(Boolean).length;
  let confidence: string;
  let confidenceReason: string;
  if (positiveSignals >= 4) {
    confidence = 'High';
    confidenceReason = 'strong readiness signals across multiple dimensions';
  } else if (positiveSignals >= 2) {
    confidence = 'Med';
    confidenceReason = 'some readiness gaps remain but trajectory is positive';
  } else {
    confidence = 'Low';
    confidenceReason = 'significant gaps in readiness — needs attention';
  }

  // Generate structured comment
  const nextStepDate = new Date(today);
  nextStepDate.setDate(nextStepDate.getDate() + 3);
  const nextStepDateStr = nextStepDate.toISOString().split('T')[0];

  const statusMap: Record<string, string> = {
    'On Track': `${accountName} engagement is progressing well with active stakeholder participation.`,
    'At Risk': `${accountName} engagement has identified blockers that need resolution before proceeding.`,
    'Not Started': `${accountName} engagement is pending kickoff — initial outreach required.`,
    'Blocked': `${accountName} engagement is stalled — escalation may be needed.`,
  };

  const comment = [
    `Next Step: Complete ${milestone.title.toLowerCase()} and share deliverables with ${accountName} by ${nextStepDateStr}.`,
    `Expected Outcome: ${milestone.title} is fully validated and accepted by customer, unblocking next stage progression.`,
    `Customer Status: ${statusMap[milestone.status] ?? statusMap['On Track']}`,
    `Owner: ${milestone.owner} (${data.currentUser.role})`,
    `Confidence: ${confidence} — ${confidenceReason}`,
  ].join('\n');

  // Persist to local state
  updateMilestone(milestone.id, {
    generatedComment: comment,
    readiness,
    confidence,
    committed: true,
  });

  return { milestoneId: milestone.id, comment, readiness, confidence };
}
