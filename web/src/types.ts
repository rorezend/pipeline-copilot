export interface Account {
  id: string;
  name: string;
  tpid: string;
  tier: string;
}

export interface Meeting {
  id: string;
  title: string;
  date: string;
  accountId: string;
  attendees: string[];
  transcript: string;
}

export interface Opportunity {
  id: string;
  name: string;
  accountId: string;
  stage: number;
  revenue: number;
  closeDate: string;
  status: string;
}

export interface Milestone {
  id: string;
  opportunityId: string;
  accountId: string;
  title: string;
  stage: number;
  status: string;
  dueDate: string;
  owner: string;
  committed: boolean;
  existingComment: string;
  generatedComment?: string;
  readiness?: ReadinessChecklist;
  confidence?: string;
}

export interface ReadinessChecklist {
  sponsorIdentified: boolean;
  technicalValidation: boolean;
  budgetConfirmed: boolean;
  noBlockers: boolean;
  urgencyHigh: boolean;
}

export interface OpportunityDraft {
  name: string;
  accountId: string;
  stage: number;
  estimatedRevenue: number;
  suggestedCloseDate: string;
  milestones: MilestoneDraft[];
}

export interface MilestoneDraft {
  title: string;
  stage: number;
  dueDate: string;
  owner: string;
}

export interface MockData {
  quarterEnd: string;
  currentUser: { id: string; name: string; role: string };
  accounts: Account[];
  meetings: Meeting[];
  opportunities: Opportunity[];
  milestones: Milestone[];
}
