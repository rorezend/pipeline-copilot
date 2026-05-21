# SPEC.md — CAIP Mission Control

---

## 1. Title & Executive Summary

**Product Name:** CAIP Mission Control

**What it is:** A team-shared web application that serves as the single system of record for CAIP account activity — capturing internal and external interactions, enabling prioritization, enforcing follow-up accountability, and producing a polished weekly executive newsletter with minimal manual effort.

**Who it's for:** CAIP team members who collectively manage enterprise accounts and need shared visibility into what happened, what matters, and what's next. Secondary consumers are executive peers and leadership who receive the weekly newsletter.

**Why it matters:** Today, CAIP account activity is fragmented across calendars, email, chat, notes, and individual memories. There is no shared truth. Follow-ups fall through cracks. Weekly executive updates are manual, inconsistent, and time-consuming. Mission Control replaces this chaos with a structured, team-owned operating surface that turns scattered signals into clear narrative and action.

---

## 2. Executive TL;DR

- **Single source of truth:** All account activity — meetings, emails, workshops, exec briefings, deliverables — captured in one shared place.
- **Prioritization built in:** Every activity is scored for business impact, exec visibility, and urgency so the team focuses on what matters.
- **Follow-up accountability:** Every follow-up has an owner, a due date, and visible status — nothing falls through the cracks.
- **Newsletter in minutes, not hours:** A weekly executive newsletter is auto-drafted from tagged activities, reviewed by the team, and exported — reducing production time from hours to minutes.
- **Team-first design:** Shared by default. Every team member sees the same accounts, activities, and follow-ups. No silos.

---

## 3. Context & Why the Current Process Fails

### Fragmentation
Account activity lives in individual calendars, email threads, Teams/Slack messages, OneNote pages, and undocumented conversations. No single place aggregates what the team collectively knows about an account.

### Manual Effort
Producing the weekly executive newsletter requires one person to manually poll teammates, chase context, synthesize updates, and format the output. This takes 2–4 hours per week and depends on one person's availability.

### Missed Follow-ups
Action items from meetings and customer interactions are captured ad hoc — in personal notes, chat messages, or not at all. There is no shared registry of commitments, owners, or deadlines.

### Inconsistent Executive Storytelling
The newsletter quality varies week to week depending on who writes it, what they remember, and how much time they have. There is no repeatable structure, no consistent tone, and no mechanism to ensure the most important items surface.

---

## 4. Target Users & Personas

### Primary: CAIP Team Members
- **Role:** Account managers, technical specialists, program managers on the CAIP team.
- **Behavior:** Attend customer meetings, run internal syncs, deliver workshops, write follow-up emails, track deliverables.
- **Need:** A shared place to log activity, see what teammates are doing across accounts, own follow-ups, and contribute to the weekly newsletter without extra overhead.
- **Usage frequency:** Daily (log activity, check follow-ups) and weekly (newsletter review).

### Secondary: Executive Consumers
- **Role:** Senior leaders, exec peers, cross-functional stakeholders.
- **Behavior:** Read the weekly newsletter to stay informed on account health, wins, risks, and priorities.
- **Need:** A concise, well-structured, outcome-focused summary they can scan in under 3 minutes.
- **Usage frequency:** Weekly (read newsletter). They do not log into the application.

### Tertiary (Future): Managers Viewing Rollups
- **Role:** CAIP management, regional leads.
- **Behavior:** Review aggregated activity and follow-up health across multiple teams.
- **Need:** Dashboards showing team-level metrics — activity volume, follow-up completion rates, newsletter cadence.
- **Usage frequency:** Weekly. Out of scope for MVP.

---

## 5. Goals & Non-Goals

### Goals

| ID | Goal | Measurable Outcome |
|----|------|---------------------|
| G1 | Team-shared activity tracking | 100% of team members can view and contribute activities to any shared account |
| G2 | Importance & impact scoring | Every activity has a computed importance score; team can filter/sort by it |
| G3 | Follow-up accountability | Every follow-up has an owner, due date, and visible completion status |
| G4 | Weekly executive newsletter generation | Newsletter draft produced from tagged activities in < 15 minutes of manual effort |
| G5 | Shared system of record | One canonical place the team checks for "what happened this week" |

### Non-Goals

| ID | Non-Goal | Rationale |
|----|----------|-----------|
| NG1 | Full CRM replacement | Mission Control captures activity signal, not pipeline/opportunity/deal management |
| NG2 | Heavy workflow automation in MVP | Keep the system simple; automation (e.g., auto-import from email) is Phase 2 |
| NG3 | Real-time collaboration / co-editing | Not a Google Docs replacement; async shared data is sufficient |
| NG4 | Customer-facing portal | This is an internal team tool only |
| NG5 | AI-generated narrative in MVP | Newsletter drafts are assembled from structured data; AI summarization is Phase 2 |

---

## 6. Scope Definition

### MVP (Must Have)

| Feature | Description |
|---------|-------------|
| Shared accounts | Team-visible account registry with basic metadata |
| Shared activity feed | Log internal/external activities associated with accounts |
| Contributors | Associate multiple team members with each activity |
| Importance tagging | Tag activities with impact, exec visibility, urgency |
| Follow-ups | Create follow-ups with owner, due date, status |
| Newsletter draft generation | Auto-assemble newsletter from activities marked for inclusion |
| Newsletter review & export | Edit draft, reorder sections, export as HTML email / Markdown / PDF |
| Filters & search | Filter activities by account, date range, importance, type, contributor |
| Basic roles | Admin (manage accounts, team) and Member (full read/write on activities) |
| Audit trail | Log who created/modified each activity, follow-up, and newsletter |

### Phase 2 / Later

| Feature | Description |
|---------|-------------|
| Calendar integration | Auto-import meetings from Outlook/Google Calendar |
| Email integration | Surface email threads related to accounts |
| CRM sync | Pull account metadata from Salesforce/Dynamics |
| AI summarization | Auto-generate narrative summaries from raw activity data |
| Manager dashboards | Cross-team rollup views |
| Slack/Teams notifications | Alert owners on overdue follow-ups |
| Recurring follow-up templates | Repeatable follow-up patterns for common workflows |
| Mobile-native app | Dedicated mobile experience beyond responsive web |

---

## 7. Key Team User Journeys

### Journey 1: Log an Activity
1. Team member opens Mission Control.
2. Clicks **"+ Activity"** from the global nav or from an account page.
3. Selects account(s) the activity relates to.
4. Fills in: type (meeting, email, workshop, briefing, note, deliverable), title, date, summary.
5. Adds contributors (other team members involved).
6. Tags importance dimensions (impact, exec visibility, urgency).
7. Optionally checks **"Include in newsletter"**.
8. Saves. Activity appears in the shared feed and on the account page.

### Journey 2: Create and Assign a Follow-up
1. From an activity detail page, team member clicks **"+ Follow-up"**.
2. Fills in: description, owner (any team member), due date.
3. Saves. Follow-up appears on the owner's dashboard and on the activity's detail page.
4. Owner receives a visual indicator on their dashboard for pending follow-ups.
5. Owner marks follow-up as complete or updates status (in-progress, blocked, done).

### Journey 3: Weekly Newsletter Generation
1. On Monday (or any day), a team member opens the **Newsletter Builder**.
2. System auto-populates a draft by pulling activities from the past 7 days that are marked **"Include in newsletter"** or that exceed the importance threshold.
3. Activities are pre-sorted into default sections (Wins, Customer Moves, Risks, Metrics, Next Week, Asks).
4. Team member reviews: reorders items, edits summaries, adds/removes entries, adjusts section assignments.
5. Optionally shares draft link with teammates for async review.
6. Clicks **"Export"** → chooses format (HTML email body, Markdown, PDF).
7. Copies or sends the newsletter to the exec distribution.

### Journey 4: Check Account Health
1. Team member navigates to an account page.
2. Sees: recent activity timeline, open follow-ups, importance trend, contributor list.
3. Filters by date range or activity type.
4. Quickly assesses: "Is this account getting enough attention? Are follow-ups on track?"

### Journey 5: Weekly Team Standup Prep
1. Team lead opens the **"This Week"** view.
2. Sees all activities logged this week across all accounts, sorted by importance.
3. Sees overdue and upcoming follow-ups.
4. Uses this view to run a 15-minute team sync.

---

## 8. Functional Requirements

### A. Teams & Accounts

| ID | Requirement | Priority |
|----|-------------|----------|
| FA-1 | System supports one team context per deployment (multi-team is Phase 2) | MVP |
| FA-2 | Team members are added by an Admin via email invitation or manual creation | MVP |
| FA-3 | Each account has: name (required), industry (optional), tier (optional: Strategic / Growth / Standard), notes (optional) | MVP |
| FA-4 | Accounts are visible to all team members (no per-account access control in MVP) | MVP |
| FA-5 | Accounts can be archived (hidden from default views, data retained) | MVP |
| FA-6 | Account list view supports search by name, filter by tier, sort by name or recent activity date | MVP |

### B. Activities

| ID | Requirement | Priority |
|----|-------------|----------|
| FB-1 | An activity represents a discrete interaction or event related to one or more accounts | MVP |
| FB-2 | Activity required fields: title, type, date, account(s), created_by | MVP |
| FB-3 | Activity optional fields: summary (rich text, max 2000 chars), contributors, tags, importance dimensions, newsletter_include flag, attachments (links only in MVP) | MVP |
| FB-4 | Activity types (configurable by Admin): Meeting (Internal), Meeting (External), Email, Workshop, Exec Briefing, Deliverable, Note, Other | MVP |
| FB-5 | An activity can be associated with multiple accounts (many-to-many) | MVP |
| FB-6 | An activity can have multiple contributors (team members who participated) | MVP |
| FB-7 | Activities are displayed in reverse-chronological order by default | MVP |
| FB-8 | Any team member can create, edit, or delete any activity (**Assumption:** team trust model; no per-activity ownership restrictions) | MVP |
| FB-9 | Editing an activity creates an audit log entry (who, when, what changed) | MVP |
| FB-10 | Activities can be bulk-tagged (select multiple → set importance, newsletter flag) | MVP |

### C. Importance / Impact Controls

| ID | Requirement | Priority |
|----|-------------|----------|
| FC-1 | Each activity has four importance dimensions, each scored 1–3 (Low / Medium / High): Business Impact, Revenue Influence, Exec Visibility, Urgency | MVP |
| FC-2 | A composite **Importance Score** is computed as: `(Business Impact × 3) + (Revenue Influence × 2) + (Exec Visibility × 2) + (Urgency × 1)` — range 8 to 24 | MVP |
| FC-3 | Importance score thresholds: **High** (19–24), **Medium** (13–18), **Low** (8–12) | MVP |
| FC-4 | Activities can be filtered and sorted by composite importance score or any individual dimension | MVP |
| FC-5 | The newsletter builder uses importance score ≥ 13 (Medium+) as the default inclusion threshold | MVP |
| FC-6 | Importance dimensions default to 1 (Low) if not explicitly set | MVP |

### D. Follow-ups & Ownership

| ID | Requirement | Priority |
|----|-------------|----------|
| FD-1 | A follow-up is a discrete action item linked to exactly one activity | MVP |
| FD-2 | Follow-up required fields: description, owner (team member), due_date, status | MVP |
| FD-3 | Follow-up statuses: Open, In Progress, Blocked, Done | MVP |
| FD-4 | Only the follow-up owner or an Admin can change status to Done | MVP |
| FD-5 | Follow-ups overdue by ≥ 1 day are visually flagged (red indicator) | MVP |
| FD-6 | Each team member's dashboard shows their assigned follow-ups sorted by due date | MVP |
| FD-7 | Follow-ups can be filtered globally by: owner, status, due date range, account | MVP |
| FD-8 | Follow-up completion triggers an audit log entry | MVP |
| FD-9 | A follow-up can optionally include a resolution note (free text, max 500 chars) when marked Done | MVP |

### E. Newsletter Builder

| ID | Requirement | Priority |
|----|-------------|----------|
| FE-1 | The newsletter builder creates a draft for a configurable date range (default: past 7 days) | MVP |
| FE-2 | Draft auto-populates by pulling activities where `newsletter_include = true` OR `importance_score ≥ 13` within the date range | MVP |
| FE-3 | Each activity in the draft is displayed as a concise bullet: `[Account] — Title: Summary (first 150 chars)` | MVP |
| FE-4 | Activities are auto-sorted into default sections (see §10) based on activity type and tags; team member can reassign section | MVP |
| FE-5 | Team member can edit any bullet's text directly in the builder (edits do not modify the source activity) | MVP |
| FE-6 | Team member can add free-text bullets not tied to any activity (for commentary, context) | MVP |
| FE-7 | Team member can reorder bullets within a section via drag-and-drop or up/down controls | MVP |
| FE-8 | Team member can remove a bullet from the draft (does not delete the source activity) | MVP |
| FE-9 | Newsletter draft can be saved and resumed later | MVP |
| FE-10 | Newsletter draft can be shared via a read-only link for team review before export | MVP |
| FE-11 | Export formats: HTML (copy-pasteable email body), Markdown, PDF | MVP |
| FE-12 | Each exported newsletter is saved as a `NewsletterIssue` with a timestamp and snapshot of content | MVP |
| FE-13 | Previous newsletter issues are viewable in a chronological archive | MVP |

### F. Views, Filters, Search

| ID | Requirement | Priority |
|----|-------------|----------|
| FF-1 | **Global Activity Feed:** Reverse-chronological list of all activities across all accounts | MVP |
| FF-2 | **Account Detail Page:** Activities and follow-ups scoped to one account | MVP |
| FF-3 | **My Dashboard:** Current user's assigned follow-ups + activities they contributed to | MVP |
| FF-4 | **This Week View:** Activities and follow-ups from the current calendar week | MVP |
| FF-5 | **Newsletter Archive:** List of past newsletter issues with preview | MVP |
| FF-6 | Global search: full-text search across activity titles and summaries | MVP |
| FF-7 | Filters available on all list views: account, activity type, date range, importance tier, contributor, newsletter flag | MVP |
| FF-8 | Filter state is preserved in the URL (shareable/bookmarkable) | MVP |

### G. Permissions & Roles

| ID | Requirement | Priority |
|----|-------------|----------|
| FG-1 | Two roles in MVP: **Admin** and **Member** | MVP |
| FG-2 | **Admin** can: manage team members (invite, deactivate), manage accounts (create, archive), configure activity types, all Member capabilities | MVP |
| FG-3 | **Member** can: create/edit/delete activities, create/manage follow-ups, build/export newsletters, use all views and filters | MVP |
| FG-4 | Authentication via corporate SSO (OAuth 2.0 / OIDC). **Assumption:** Azure AD or equivalent is available. | MVP |
| FG-5 | All data is scoped to the team; no cross-team data access in MVP | MVP |

---

## 9. Data Model (Conceptual)

### Entity: Team
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| id | UUID | Yes | Primary key |
| name | String(100) | Yes | Team display name |
| created_at | Timestamp | Yes | Auto-set |

### Entity: User
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| id | UUID | Yes | Primary key |
| team_id | UUID | Yes | FK → Team |
| email | String(255) | Yes | Unique within team |
| display_name | String(100) | Yes | |
| role | Enum | Yes | Admin, Member |
| status | Enum | Yes | Active, Deactivated |
| created_at | Timestamp | Yes | Auto-set |

### Entity: Account
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| id | UUID | Yes | Primary key |
| team_id | UUID | Yes | FK → Team |
| name | String(200) | Yes | Account/customer name |
| industry | String(100) | No | |
| tier | Enum | No | Strategic, Growth, Standard |
| notes | Text | No | Free-form notes |
| is_archived | Boolean | Yes | Default: false |
| created_at | Timestamp | Yes | Auto-set |
| updated_at | Timestamp | Yes | Auto-updated |

### Entity: Activity
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| id | UUID | Yes | Primary key |
| team_id | UUID | Yes | FK → Team |
| title | String(300) | Yes | |
| type | String(50) | Yes | e.g., "Meeting (External)" |
| date | Date | Yes | When the activity occurred |
| summary | Text(2000) | No | Rich text |
| importance_business_impact | Int (1-3) | Yes | Default: 1 |
| importance_revenue_influence | Int (1-3) | Yes | Default: 1 |
| importance_exec_visibility | Int (1-3) | Yes | Default: 1 |
| importance_urgency | Int (1-3) | Yes | Default: 1 |
| importance_score | Int (8-24) | Yes | Computed; see §11 |
| newsletter_include | Boolean | Yes | Default: false |
| created_by | UUID | Yes | FK → User |
| created_at | Timestamp | Yes | Auto-set |
| updated_at | Timestamp | Yes | Auto-updated |

**Relationships:**
- Activity ↔ Account: Many-to-many via `ActivityAccount` join table
- Activity ↔ User (contributors): Many-to-many via `ActivityContributor` join table

### Entity: ActivityAccount (Join)
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| activity_id | UUID | Yes | FK → Activity |
| account_id | UUID | Yes | FK → Account |

### Entity: ActivityContributor (Join)
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| activity_id | UUID | Yes | FK → Activity |
| user_id | UUID | Yes | FK → User |

### Entity: Tag
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| id | UUID | Yes | Primary key |
| team_id | UUID | Yes | FK → Team |
| name | String(50) | Yes | Unique within team |
| color | String(7) | No | Hex color code |

### Entity: ActivityTag (Join)
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| activity_id | UUID | Yes | FK → Activity |
| tag_id | UUID | Yes | FK → Tag |

### Entity: FollowUp
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| id | UUID | Yes | Primary key |
| activity_id | UUID | Yes | FK → Activity |
| description | String(500) | Yes | |
| owner_id | UUID | Yes | FK → User |
| due_date | Date | Yes | |
| status | Enum | Yes | Open, InProgress, Blocked, Done |
| resolution_note | Text(500) | No | Set when status → Done |
| created_by | UUID | Yes | FK → User |
| created_at | Timestamp | Yes | Auto-set |
| updated_at | Timestamp | Yes | Auto-updated |

### Entity: NewsletterIssue
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| id | UUID | Yes | Primary key |
| team_id | UUID | Yes | FK → Team |
| title | String(200) | Yes | e.g., "Week of Feb 23, 2026" |
| date_range_start | Date | Yes | |
| date_range_end | Date | Yes | |
| status | Enum | Yes | Draft, Published |
| content_snapshot | JSON | Yes | Full rendered content at time of publish |
| created_by | UUID | Yes | FK → User |
| published_at | Timestamp | No | Set when exported/published |
| created_at | Timestamp | Yes | Auto-set |
| updated_at | Timestamp | Yes | Auto-updated |

### Entity: NewsletterSection
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| id | UUID | Yes | Primary key |
| newsletter_id | UUID | Yes | FK → NewsletterIssue |
| section_type | Enum | Yes | See §10 for default types |
| sort_order | Int | Yes | Display position |
| items | JSON | Yes | Array of {activity_id (nullable), text, sort_order} |

### Entity: AuditLog
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| id | UUID | Yes | Primary key |
| team_id | UUID | Yes | FK → Team |
| user_id | UUID | Yes | FK → User who performed action |
| entity_type | String(50) | Yes | e.g., "Activity", "FollowUp" |
| entity_id | UUID | Yes | ID of affected entity |
| action | String(20) | Yes | Created, Updated, Deleted |
| changes | JSON | No | Before/after diff |
| timestamp | Timestamp | Yes | Auto-set |

---

## 10. Newsletter Format & Rules

### Default Sections

| Section | Purpose | Default Mapping |
|---------|---------|-----------------|
| 🏆 Wins & Progress | Completed milestones, positive outcomes, deals closed | Activities tagged with "Win" or type = Deliverable with High importance |
| 🔄 Key Customer Moves | Significant customer interactions, workshops, exec briefings | Activities of type Meeting (External), Workshop, Exec Briefing |
| ⚠️ Risks & Blockers | Issues, escalations, stalled accounts | Activities tagged "Risk" or "Blocker"; follow-ups with status = Blocked |
| 📊 Metrics & Outcomes | Quantifiable results, KPIs achieved | Activities tagged "Metric" or "Outcome" |
| 📅 Next Week Priorities | Upcoming important activities and follow-ups | Follow-ups due in the next 7 days with importance ≥ Medium |
| 🙋 Asks & Help Needed | Cross-team requests, exec sponsorship asks | Activities tagged "Ask" or "Help Needed" |

### Inclusion Rules

1. **Automatic inclusion:** Activities within the date range where `newsletter_include = true` OR `importance_score ≥ 13`.
2. **Manual override:** Team member can manually add or remove any activity from the draft regardless of score.
3. **Deduplication:** If an activity is associated with multiple accounts, it appears once with all account names listed.
4. **Staleness:** Activities older than the date range are excluded unless manually added.

### Formatting Rules

- Each bullet follows the pattern: **[Account Name]** — Activity title. Summary excerpt (max 150 chars).
- Sections with zero items are hidden in the export.
- Newsletter header includes: Team name, date range, "Prepared by [User]".
- Newsletter footer includes: "Generated by CAIP Mission Control" with timestamp.

### Tone Guidelines

- Executive-ready: assume the reader has 2 minutes.
- Outcome-focused: lead with results, not process.
- Concise: no bullet exceeds 2 sentences.
- Action-oriented: if something needs a decision, say so.

---

## 11. Importance & Prioritization Logic

### Scoring Model

| Dimension | Weight | 1 (Low) | 2 (Medium) | 3 (High) |
|-----------|--------|---------|------------|----------|
| Business Impact | ×3 | Routine operational | Supports strategic initiative | Directly affects account retention/expansion |
| Revenue Influence | ×2 | No revenue implication | Influences pipeline/timing | Directly tied to revenue event |
| Exec Visibility | ×2 | Team-level only | Director/VP awareness | C-suite / SVP attention required |
| Urgency | ×1 | No time pressure | Needs attention this week | Needs action within 24–48 hours |

**Formula:** `Score = (Business Impact × 3) + (Revenue Influence × 2) + (Exec Visibility × 2) + (Urgency × 1)`

**Range:** 8 (all Low) to 24 (all High)

**Thresholds:**
- **High (19–24):** Executive-critical. Always included in newsletter. Highlighted in views.
- **Medium (13–18):** Significant. Included in newsletter by default. Visible in standard filters.
- **Low (8–12):** Routine. Excluded from newsletter unless manually added. Visible in "all" filters.

### Concrete Examples

**Example 1: Score = 22 (High)**
> "Exec briefing with Contoso CISO on cloud security roadmap."
> - Business Impact: 3 (directly affects $2M renewal)
> - Revenue Influence: 3 (tied to renewal decision)
> - Exec Visibility: 2 (VP-level)
> - Urgency: 2 (briefing is this week)
> - Score: (3×3) + (3×2) + (2×2) + (2×1) = 9 + 6 + 4 + 2 = **21**
> → Auto-included in newsletter. Flagged as High.

**Example 2: Score = 14 (Medium)**
> "Workshop with Northwind Traders on data migration best practices."
> - Business Impact: 2 (supports active project)
> - Revenue Influence: 1 (no direct revenue impact)
> - Exec Visibility: 2 (Director tracking)
> - Urgency: 1 (scheduled, not urgent)
> - Score: (2×3) + (1×2) + (2×2) + (1×1) = 6 + 2 + 4 + 1 = **13**
> → Included in newsletter by default. Standard visibility.

**Example 3: Score = 9 (Low)**
> "Internal team sync to review Contoso account notes."
> - Business Impact: 1 (routine)
> - Revenue Influence: 1 (none)
> - Exec Visibility: 1 (team only)
> - Urgency: 1 (no time pressure)
> - Score: (1×3) + (1×2) + (1×2) + (1×1) = 3 + 2 + 2 + 1 = **8**
> → Excluded from newsletter. Visible only in unfiltered views.

---

## 12. Non-Functional Requirements

### Security & Privacy

| ID | Requirement |
|----|-------------|
| NF-1 | All data encrypted in transit (TLS 1.2+) and at rest (AES-256) |
| NF-2 | Authentication via corporate SSO (OAuth 2.0 / OIDC) — no local passwords |
| NF-3 | Session tokens expire after 8 hours of inactivity |
| NF-4 | All API endpoints require authenticated session; no anonymous access |
| NF-5 | Data is team-scoped; API enforces team_id boundary on all queries |

### Auditability

| ID | Requirement |
|----|-------------|
| NF-6 | Every create, update, and delete operation on Activities, Follow-ups, and Newsletters is recorded in the AuditLog |
| NF-7 | AuditLog entries are immutable (append-only) |
| NF-8 | AuditLog is viewable by Admins via an admin panel |
| NF-9 | AuditLog entries are retained for a minimum of 2 years |

### Performance

| ID | Requirement |
|----|-------------|
| NF-10 | Page load time ≤ 2 seconds for any view with ≤ 500 activities displayed |
| NF-11 | Newsletter draft generation ≤ 5 seconds for up to 200 activities in the date range |
| NF-12 | Full-text search returns results in ≤ 1 second for datasets up to 10,000 activities |
| NF-13 | System supports up to 50 concurrent users per team without degradation |

### UX & Accessibility

| ID | Requirement |
|----|-------------|
| NF-14 | Responsive design: fully functional on screens ≥ 768px (tablet and desktop) |
| NF-15 | Mobile-friendly: core read flows (view activities, check follow-ups) usable on 375px+ screens |
| NF-16 | Meets WCAG 2.1 Level AA accessibility standards |
| NF-17 | Supports latest 2 versions of Chrome, Edge, Firefox, and Safari |

---

## 13. High-Level Architecture (Conceptual)

### Option A: Simple Stack (Fast MVP)

Best for: Getting to production in 4–6 weeks with a small team (2–3 engineers).

```
┌─────────────────────────────────────────────────┐
│                   Frontend                       │
│         React / Next.js (SSR/SSG)               │
│         Tailwind CSS for styling                │
│         React Query for data fetching           │
└────────────────────┬────────────────────────────┘
                     │ HTTPS / REST
┌────────────────────▼────────────────────────────┐
│                   Backend                        │
│         Next.js API Routes OR Express.js        │
│         TypeScript                              │
│         Prisma ORM                              │
└────────────────────┬────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────┐
│                 Data Store                       │
│         PostgreSQL (single instance)            │
│         Full-text search via pg_trgm            │
└─────────────────────────────────────────────────┘
│                                                  │
│  Auth: Azure AD via NextAuth.js / Passport.js   │
│  Export: Server-side HTML/PDF generation         │
│  Hosting: Azure App Service or Vercel           │
└─────────────────────────────────────────────────┘
```

### Option B: Scalable Team-Ready Stack

Best for: Preparing for multi-team, integration-heavy future with dedicated backend team.

```
┌─────────────────────────────────────────────────┐
│                   Frontend                       │
│         React SPA (Vite)                        │
│         Tailwind CSS + Headless UI              │
│         React Query / TanStack Query            │
└────────────────────┬────────────────────────────┘
                     │ HTTPS / REST + WebSocket
┌────────────────────▼────────────────────────────┐
│                   API Layer                      │
│         Node.js + Express / Fastify             │
│         TypeScript                              │
│         OpenAPI spec-first design               │
└─────────┬──────────────────────────┬────────────┘
          │                          │
┌─────────▼─────────┐   ┌──────────▼─────────────┐
│   PostgreSQL      │   │   Redis                 │
│   Primary data    │   │   Session cache         │
│   Full-text (FTS) │   │   Rate limiting         │
└───────────────────┘   └─────────────────────────┘
│                                                  │
│  Auth: Azure AD / OIDC via Passport.js          │
│  Queue: Bull/BullMQ for async jobs              │
│  Export: Puppeteer for PDF, Handlebars for HTML │
│  Hosting: Azure Kubernetes Service or Container │
│           Apps                                   │
└─────────────────────────────────────────────────┘
```

### Newsletter Generation Flow

```
1. User clicks "Generate Newsletter"
2. System queries Activities where:
   - date BETWEEN range_start AND range_end
   - newsletter_include = true OR importance_score >= 13
3. Activities are grouped into sections by type/tag mapping rules
4. Draft is assembled as NewsletterIssue + NewsletterSections (JSON)
5. User reviews/edits in the Newsletter Builder UI
6. On "Export":
   a. content_snapshot is frozen as JSON
   b. HTML template is rendered with content
   c. Output is delivered as: copy-to-clipboard HTML, downloadable Markdown, or PDF
   d. NewsletterIssue.status → Published, published_at → now()
```

### Export Mechanisms

| Format | Mechanism | Use Case |
|--------|-----------|----------|
| HTML email body | Server-rendered Handlebars/EJS template → clipboard | Paste into Outlook/Gmail |
| Markdown | JSON → Markdown serialization | Archive, paste into wikis |
| PDF | HTML → Puppeteer/wkhtmltopdf | Formal distribution |

---

## 14. Integrations

### MVP Integrations

| Integration | Description | Data Required |
|-------------|-------------|---------------|
| Manual entry | All activities entered via web UI forms | N/A |
| CSV export | Export activity list and follow-ups as CSV | Activity fields, follow-up fields |
| Markdown export | Newsletter and activity summaries exported as .md | Newsletter content |
| HTML export | Newsletter exported as formatted HTML email body | Newsletter content |
| PDF export | Newsletter exported as styled PDF | Newsletter content |

### Phase 2 Integrations

| Integration | Value | Minimal Data Required |
|-------------|-------|----------------------|
| Outlook/Google Calendar | Auto-create activity stubs from calendar events with customer attendees | Event title, date/time, attendees, account matching via attendee domain |
| Email (Microsoft Graph / Gmail API) | Surface email threads related to accounts for context | Subject, date, sender/recipient, snippet; matched by account contact domains |
| CRM (Salesforce / Dynamics 365) | Pull account metadata (tier, industry, owner); link activities to opportunities | Account name, ID, tier, industry, primary contact |
| Slack / Microsoft Teams | Notify follow-up owners of overdue items; allow quick activity logging via bot | Follow-up description, owner mention, due date |
| Notes (OneNote / Notion) | Link meeting notes to activities | Note title, URL, date |

**Integration design principle:** Each integration should be additive (enriches existing data) and optional (system works fully without it).

---

## 15. Success Metrics

| Metric | Baseline (Current) | Target (3 months post-launch) | Measurement Method |
|--------|---------------------|-------------------------------|-------------------|
| % of team activities captured weekly | ~20% (estimated; most go unrecorded) | ≥ 80% | Count of activities logged per week vs. estimated total (from calendar event count) |
| % of follow-ups completed on time | Unknown (no tracking) | ≥ 75% | FollowUps marked Done where completed_at ≤ due_date |
| Time to produce weekly newsletter | 2–4 hours (manual) | ≤ 30 minutes | Self-reported by newsletter author; track time from draft creation to export |
| Newsletter production consistency | ~70% of weeks (sometimes skipped) | 100% of weeks | Count of NewsletterIssues published per month |
| Team adoption (weekly active users) | N/A | ≥ 90% of team members log in weekly | Unique logins per week / total active team members |
| Exec engagement with newsletter | Anecdotal | ≥ 1 exec reply/forward per issue (qualitative) | Manual tracking by team |

---

## 16. Acceptance Criteria (Testable)

| ID | Criterion | Verification |
|----|-----------|--------------|
| AC-1 | A team member can create an activity with title, type, date, and at least one account, and it appears in the shared activity feed within 2 seconds | Create activity via UI → verify it appears in feed for another team member |
| AC-2 | An activity can be associated with 2+ accounts, and it appears on each account's detail page | Create activity with 3 accounts → navigate to each account page → verify activity present |
| AC-3 | An activity's importance score is correctly computed using the weighted formula and displayed on the activity card | Set dimensions to known values → verify displayed score matches formula |
| AC-4 | A follow-up can be created from an activity with owner, due date, and description, and it appears on the owner's dashboard | Create follow-up → log in as owner → verify it appears on dashboard |
| AC-5 | A follow-up overdue by ≥ 1 day displays a red visual indicator on all views where it appears | Create follow-up with due_date = yesterday → verify red indicator on dashboard, activity page, and global follow-up list |
| AC-6 | Only the follow-up owner or an Admin can mark a follow-up as Done | Log in as non-owner Member → attempt to mark Done → verify action is denied |
| AC-7 | The newsletter builder auto-populates with activities from the selected date range where newsletter_include = true OR importance_score ≥ 13 | Create 5 activities (3 qualifying, 2 not) → open builder → verify exactly 3 appear |
| AC-8 | A newsletter draft can be edited (reorder, edit text, add/remove bullets) and exported as HTML, Markdown, and PDF without data loss | Edit draft → export each format → verify content matches edits |
| AC-9 | Exported newsletter follows the prescribed format: header with team name and date range, sections with bullets in the pattern [Account] — Title: Summary, footer with timestamp | Export newsletter → inspect output → verify format compliance |
| AC-10 | Published newsletters are saved and viewable in the newsletter archive with full content | Publish newsletter → navigate to archive → verify issue appears with complete content |
| AC-11 | An Admin can invite a new team member, and the new member can log in and see all existing accounts and activities | Admin invites user → new user logs in via SSO → verify access to accounts and activity feed |
| AC-12 | A deactivated user cannot log in, and their authored activities and follow-ups remain visible | Admin deactivates user → user attempts login → verify denial; verify user's data is intact |
| AC-13 | All create, update, and delete actions on activities and follow-ups generate audit log entries visible to Admins | Perform CRUD operations → Admin views audit log → verify entries exist with correct who/what/when |
| AC-14 | Full-text search across activity titles and summaries returns relevant results within 1 second for a dataset of 1,000+ activities | Seed 1,000 activities → search for known terms → verify results and response time |
| AC-15 | Filter state (account, type, date range, importance) is preserved in the URL and can be shared as a link | Apply filters → copy URL → open in new tab → verify same filters applied |

---

## 17. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **Low adoption:** Team members don't log activities consistently, leading to incomplete data and an unreliable newsletter | High | High | Make activity logging fast (< 30 seconds). Integrate into existing team rituals (standup = review feed). Admin can see per-member activity counts to encourage participation. |
| **Data quality:** Activities are logged with minimal detail, making the newsletter useless | Medium | High | Require title and at least one account. Show a "completeness indicator" (e.g., summary missing, importance not set). Newsletter builder highlights low-quality entries. |
| **Over-complexity in MVP:** Too many features slow delivery and overwhelm users | Medium | Medium | Strict MVP scope. Ship without integrations, AI, or multi-team support. Add complexity only after core loop is validated. |
| **Newsletter fatigue:** Execs stop reading the newsletter if it's too long or not relevant | Low | Medium | Enforce concise formatting (max 150 chars per bullet). Importance scoring ensures only significant items surface. Keep total newsletter under 1 page. |
| **SSO integration delays:** Corporate identity provider setup takes longer than expected | Medium | Medium | Build with a simple email/password fallback for development. SSO is required for production but should not block feature development. |
| **Single-team assumption breaks:** Multiple teams want to use the tool simultaneously before Phase 2 | Low | Low | Data model already includes team_id on all entities. Adding multi-team support later is a routing/auth change, not a schema change. |

---

## 18. Open Questions

| # | Question | Context / Assumption |
|---|----------|---------------------|
| 1 | Which corporate SSO provider will be used? | **Assumption:** Azure AD with OIDC. Needs confirmation from IT. |
| 2 | Should the newsletter be sent via email directly from the app, or exported for manual send? | **Assumption:** Export only in MVP (HTML/Markdown/PDF). Direct send is Phase 2. |
| 3 | Is there an existing account list we can seed, or do accounts need to be created from scratch? | **Assumption:** Accounts are created manually in MVP; CSV import could be a quick-win addition. |
| 4 | What is the expected team size? | **Assumption:** 5–20 members per team. Affects UX decisions (dropdown vs. search for user selection). |
| 5 | Are there compliance requirements for data retention or residency? | **Assumption:** Standard enterprise data retention (2 years audit log). No specific geographic residency requirement. |
| 6 | Should activity deletion be a soft delete or hard delete? | **Assumption:** Soft delete (mark as deleted, retain in database, exclude from views). Needs confirmation. |
| 7 | Is there a preferred hosting environment (Azure, AWS, on-prem)? | **Assumption:** Azure, given Microsoft ecosystem. |
| 8 | Who approves the newsletter before distribution? | **Assumption:** Any team member can export; no formal approval workflow in MVP. |
| 9 | Should the importance scoring weights be configurable by Admins? | **Assumption:** Fixed weights in MVP. Configurable weights are Phase 2. |
| 10 | Are there existing newsletter templates or branding guidelines? | **Assumption:** We will define a default template. Branding customization (logo, colors) is Phase 2. |
| 11 | How should the system handle activities that span multiple weeks? | **Assumption:** Activity date determines which week it belongs to. If the activity is ongoing, the team logs a new activity entry for the current week's update. |
| 12 | Should follow-ups support reassignment to a different owner? | **Assumption:** Yes, any team member can reassign. The audit log captures the change. |

---

## 19. Milestones

### Milestone 1: MVP Core — "Log & See"
**Definition of Done:** Team members can create accounts, log activities, and view the shared activity feed with filters and search.

**Deliverables:**
- User authentication via SSO
- Account CRUD (create, read, update, archive)
- Activity CRUD with importance scoring
- Activity feed with filters (account, type, date, importance)
- Full-text search
- My Dashboard (personal follow-ups and contributed activities)

---

### Milestone 2: Follow-up Accountability — "Own & Track"
**Definition of Done:** Follow-ups can be created from activities, assigned to owners, tracked by status, and overdue items are flagged.

**Deliverables:**
- Follow-up CRUD linked to activities
- Owner assignment and status management
- Overdue flagging (visual indicators)
- Follow-up filters (owner, status, due date, account)
- Audit logging for all CRUD operations

---

### Milestone 3: Newsletter v1 — "Draft & Ship"
**Definition of Done:** A weekly newsletter can be auto-generated from tagged activities, edited in a builder UI, and exported as HTML, Markdown, or PDF.

**Deliverables:**
- Newsletter builder with auto-population logic
- Section assignment and reordering
- Inline editing of bullet text
- Free-text bullet addition
- Export to HTML, Markdown, PDF
- Newsletter archive

---

### Milestone 4: Team Adoption — "Embed & Iterate"
**Definition of Done:** The tool is used by ≥ 80% of the team weekly for ≥ 4 consecutive weeks, and at least 4 newsletters have been published.

**Deliverables:**
- Team onboarding (walkthrough, documentation)
- Feedback collection mechanism (in-app or survey)
- Usage metrics dashboard for Admins (activity counts per user, follow-up completion rates)
- Iteration backlog based on team feedback

---

## 20. Appendix

### A. Glossary

| Term | Definition |
|------|-----------|
| **Account** | An enterprise customer or organization the CAIP team engages with |
| **Activity** | A discrete event or interaction (meeting, email, workshop, etc.) related to one or more accounts |
| **Contributor** | A team member who participated in an activity |
| **Follow-up** | An action item arising from an activity, with an owner and due date |
| **Importance Score** | A weighted composite score (8–24) reflecting an activity's business significance |
| **Newsletter Issue** | A single edition of the weekly executive newsletter |
| **Newsletter Section** | A thematic grouping within a newsletter (e.g., Wins, Risks) |
| **Tag** | A user-defined label applied to activities for categorization |
| **Tier** | Account classification: Strategic, Growth, or Standard |

### B. Text-Only Wireframe Descriptions

#### B1. Global Activity Feed

```
┌──────────────────────────────────────────────────────┐
│  CAIP Mission Control                    [User ▼]    │
├──────────┬───────────────────────────────────────────┤
│ Nav      │  Activity Feed                            │
│          │                                           │
│ Feed     │  [+ Activity]         🔍 Search...        │
│ Accounts │                                           │
│ Follow-  │  Filters: [Account ▼] [Type ▼]           │
│  ups     │           [Date Range] [Importance ▼]     │
│ News-    │                                           │
│  letter  │  ┌─────────────────────────────────────┐  │
│ Archive  │  │ 🟢 HIGH (21)  Feb 24, 2026          │  │
│          │  │ Exec Briefing with Contoso CISO      │  │
│          │  │ Accounts: Contoso                    │  │
│          │  │ Contributors: Alice, Bob             │  │
│          │  │ 📰 In Newsletter  │ 1 Follow-up      │  │
│          │  └─────────────────────────────────────┘  │
│          │                                           │
│          │  ┌─────────────────────────────────────┐  │
│          │  │ 🟡 MED (14)   Feb 23, 2026          │  │
│          │  │ Workshop: Northwind Data Migration   │  │
│          │  │ Accounts: Northwind Traders          │  │
│          │  │ Contributors: Carol                  │  │
│          │  │ 📰 In Newsletter  │ 0 Follow-ups    │  │
│          │  └─────────────────────────────────────┘  │
│          │                                           │
│          │         [Load More]                       │
└──────────┴───────────────────────────────────────────┘
```

#### B2. Newsletter Builder

```
┌──────────────────────────────────────────────────────┐
│  Newsletter Builder           Week of Feb 23, 2026   │
│  Date Range: [Feb 23] to [Mar 1]  [Regenerate]      │
├──────────────────────────────────────────────────────┤
│                                                      │
│  🏆 WINS & PROGRESS                    [+ Add Item]  │
│  ┌────────────────────────────────────────────────┐  │
│  │ ↕ [Contoso] — Exec briefing: CISO endorsed    │  │
│  │   cloud security roadmap. Next: board review.  │  │
│  │                                    [✏️] [🗑️]   │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  🔄 KEY CUSTOMER MOVES                 [+ Add Item]  │
│  ┌────────────────────────────────────────────────┐  │
│  │ ↕ [Northwind] — Data migration workshop       │  │
│  │   completed. 3 action items assigned.          │  │
│  │                                    [✏️] [🗑️]   │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  ⚠️ RISKS & BLOCKERS                   [+ Add Item]  │
│  │ (No items — section will be hidden in export)  │  │
│                                                      │
│  [Save Draft]  [Share for Review]  [Export ▼]        │
│                                    HTML | MD | PDF   │
└──────────────────────────────────────────────────────┘
```

#### B3. My Dashboard

```
┌──────────────────────────────────────────────────────┐
│  My Dashboard                         Welcome, Alice │
├──────────────────────────────────────────────────────┤
│                                                      │
│  📋 MY FOLLOW-UPS                                    │
│  ┌──────────────────────────────────────────────────┐│
│  │ 🔴 OVERDUE  Send security review to Contoso CTO ││
│  │    Due: Feb 22  │ Account: Contoso │ [Mark Done] ││
│  ├──────────────────────────────────────────────────┤│
│  │ 🟡 DUE SOON  Schedule Northwind follow-up call  ││
│  │    Due: Feb 27  │ Account: Northwind │ [Update]  ││
│  ├──────────────────────────────────────────────────┤│
│  │ 🟢 ON TRACK  Draft proposal for Fabrikam        ││
│  │    Due: Mar 5   │ Account: Fabrikam  │ [Update]  ││
│  └──────────────────────────────────────────────────┘│
│                                                      │
│  📝 MY RECENT ACTIVITIES (last 7 days)               │
│  • Feb 24 — Exec Briefing with Contoso CISO (HIGH)  │
│  • Feb 23 — Internal sync: Q1 planning (LOW)        │
│  • Feb 21 — Fabrikam architecture review (MED)      │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### C. Example Newsletter Output

```
═══════════════════════════════════════════════════════
  CAIP MISSION CONTROL — WEEKLY UPDATE
  Week of February 23–March 1, 2026
  Prepared by: Alice Johnson
═══════════════════════════════════════════════════════

🏆 WINS & PROGRESS

  • [Contoso] — Exec briefing with CISO completed.
    Cloud security roadmap endorsed; board review
    scheduled for March.

  • [Fabrikam] — Architecture review delivered.
    Customer approved proposed design; SOW expected
    next week.

🔄 KEY CUSTOMER MOVES

  • [Northwind Traders] — Data migration workshop
    completed with 12 attendees. Three workstreams
    defined; customer PM assigned.

  • [Contoso] — Quarterly business review scheduled
    for March 10 with VP of Engineering.

⚠️ RISKS & BLOCKERS

  • [Northwind Traders] — Data residency concern
    raised. Legal review needed before migration
    can proceed. Owner: Bob (due Feb 28).

📊 METRICS & OUTCOMES

  • 4 customer-facing engagements this week
    (vs. 2 last week).
  • Contoso renewal confidence: High (was Medium).

📅 NEXT WEEK PRIORITIES

  • Finalize Fabrikam SOW (Alice, due Mar 3)
  • Northwind legal review response (Bob, due Mar 2)
  • Contoso QBR prep (Carol, due Mar 7)

🙋 ASKS & HELP NEEDED

  • Need exec sponsor intro for Northwind data
    residency escalation — requesting VP-level
    support from Legal.

───────────────────────────────────────────────────────
Generated by CAIP Mission Control │ Feb 28, 2026 14:30
═══════════════════════════════════════════════════════
```

---

*End of SPEC.md*
