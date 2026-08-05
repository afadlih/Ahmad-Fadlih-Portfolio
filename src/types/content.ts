export type Language = "id" | "en";
export type LocalizedText = { id: string; en: string };

type ContentReviewStatus = "confirmed" | "needs-owner-review";
type CaseStudyDepth = "full" | "overview";
export type ProjectStage = "prototype" | "active" | "final" | "validated";
export type ProjectVisibility = "public" | "private";
export type EvidenceStatus = "planned" | "documented" | "ready" | "verified";
type EvidenceType = "screenshot" | "diagram" | "test" | "documentation" | "video" | "repository";

type MediaPhoto = {
  src: string;
  alt: LocalizedText;
  caption?: LocalizedText;
  credit?: string;
};

type ProjectContribution = {
  role: LocalizedText;
  teamContext: LocalizedText;
  scope: LocalizedText;
  responsibilities: LocalizedText[];
  ownership: LocalizedText[];
};

type ArchitectureComponent = {
  name: string;
  responsibility: LocalizedText;
};

type ProjectArchitecture = {
  summary: LocalizedText;
  components: ArchitectureComponent[];
  dataFlow: LocalizedText[];
  deployment: LocalizedText[];
};

type DevelopmentJourney = {
  firstAttempt: LocalizedText;
  limitation: LocalizedText;
  iteration: LocalizedText;
};

type TechnicalDecision = {
  decision: LocalizedText;
  reason: LocalizedText;
  tradeoff: LocalizedText;
};

export type SourceCodePoint = {
  label: LocalizedText;
  path: string;
  href?: string;
  note: LocalizedText;
  verifiedAt: string;
  language?: string;
  lineStart?: number;
  lineEnd?: number;
  code?: string;
  linkAccess?: "public" | "owner-only";
};

export type ProofPoint = {
  title: LocalizedText;
  note?: LocalizedText;
  href?: string;
};

export type FeatureDeepDive = {
  id: string;
  title: LocalizedText;
  summary: LocalizedText;
  userNeed: LocalizedText;
  why: LocalizedText;
  approach: LocalizedText[];
  journey: DevelopmentJourney;
  technicalDecisions: TechnicalDecision[];
  validation: LocalizedText[];
  outcomes: LocalizedText[];
  evidenceIds: string[];
  sourcePoints?: SourceCodePoint[];
};


type ProjectEvidence = {
  id: string;
  type: EvidenceType;
  status: EvidenceStatus;
  title: LocalizedText;
  description: LocalizedText;
  safeToPublish: boolean;
  src?: string;
  href?: string;
  alt?: LocalizedText;
  caption?: LocalizedText;
  featureIds?: string[];
  captureGuide?: LocalizedText[];
};

export type Project = {
  slug: string;
  name: string;
  featured: boolean;
  featuredRank: number | null;
  repository: string;
  visibility: ProjectVisibility;
  stage: ProjectStage;
  caseStudyDepth: CaseStudyDepth;
  contentReview: ContentReviewStatus;
  category: LocalizedText;
  summary: LocalizedText;
  problem: LocalizedText;
  outcome: LocalizedText;
  stack: string[];
  flow: LocalizedText[];
  highlights: LocalizedText[];
  contribution: ProjectContribution;
  architecture: ProjectArchitecture;
  deepDives: FeatureDeepDive[];
  evidence: ProjectEvidence[];
  limitations: LocalizedText[];
  nextImprovements: LocalizedText[];
  accent: string;
  screenshotStatus: "needed" | "partial" | "ready";
};

export type ContentEvidenceStatus = "draft" | "documented" | "ready" | "verified";

export type Organization = {
  id: string;
  published: boolean;
  evidenceStatus: ContentEvidenceStatus;
  name: string;
  role: LocalizedText;
  period: string;
  description: LocalizedText;
  achievements: LocalizedText[];
  logo?: string;
  photos?: MediaPhoto[];
  proofPoints?: ProofPoint[];
  link?: string;
};

export type Credential = {
  id: string;
  published: boolean;
  evidenceStatus: ContentEvidenceStatus;
  title: LocalizedText;
  issuer: string;
  issuedAt: string;
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
  skills?: string[];
  description?: LocalizedText;
  proofPoints?: ProofPoint[];
};

export type Experience = {
  id: string;
  published: boolean;
  evidenceStatus: ContentEvidenceStatus;
  title: LocalizedText;
  organization?: string;
  role?: LocalizedText;
  period: string;
  description: LocalizedText;
  contributions?: LocalizedText[];
  photos: MediaPhoto[];
  tags?: string[];
  proofPoints?: ProofPoint[];
  link?: string;
};
