export type ProgramType = "active" | "hybrid" | "discontinued";

export interface StateProgram {
  slug: string;
  name: string;
  abbreviation: string;
  type: ProgramType;
  programName: string;
  governingBody: string;
  governingRule: string;
  officialSite: string;
  summary: string;
  duration: string;
  weeklyCommitment: string;
  supervisor: string;
  supervisorShort: string;
  registration: string;
  milestoneExam: string | null;
  barExamNote: string;
  highlights: string[];
  considerations: string[];
  steps: string[];
}

export const states: StateProgram[] = [
  {
    slug: "california",
    name: "California",
    abbreviation: "CA",
    type: "active",
    programName: "Law Office Study Program (LOSP)",
    governingBody: "State Bar of California, Committee of Bar Examiners",
    governingRule: "Cal. Admissions Rule 4.29 (Study in a Law Office)",
    officialSite: "calbar.ca.gov",
    summary:
      "California runs the best-known and most-used law-office-study pathway in the country. It is also the only one of the four 'pure' apprenticeship states that requires apprentices to pass a special first-year exam before continuing — a serious early filter that trips up most people who attempt it.",
    duration: "4 years (minimum), studied under direct supervision",
    weeklyCommitment: "At least 18 hours per week, 48 weeks per year, for each of the 4 years",
    supervisor:
      "A judge of a court of record, or an attorney who has actively practiced law in California for at least the preceding 5 years; the supervisor must personally spend at least 5 hours per week directly supervising your study and discussing your work.",
    supervisorShort: "Judge, or attorney with 5+ yrs active practice",
    registration:
      "You must register as a law student with the State Bar's Office of Admissions within 90 days of beginning your study — late registration carries a fee and can complicate your timeline.",
    milestoneExam: "First-Year Law Students' Examination (the 'Baby Bar')",
    barExamNote:
      "After your first year of law study, you must sit the Baby Bar. You get three attempts across three consecutive administrations; if you don't pass by then, none of your first-year study credit counts and you generally must start the four-year clock over. Historically, pass rates on the Baby Bar are low — commonly cited in the 20–30% range for first-time takers among all non-ABA-school takers — so this is the single biggest attrition point in the California pathway.",
    highlights: [
      "The most established program of the four — decades of precedent, a dedicated State Bar office, and a real (if small) community of graduates.",
      "No requirement that your supervising attorney be a former judge or have any special certification beyond 5 years of active practice.",
      "California does not require you to attend any law school at all — 100% of your legal education can happen in a law office.",
    ],
    considerations: [
      "The Baby Bar is widely considered the hardest hurdle in any reading-the-law path in the U.S. Budget real study time and consider commercial bar-prep-style resources for it specifically.",
      "California's overall bar exam pass rate for non-ABA-law-school-educated candidates is meaningfully lower than for ABA law school graduates — go in with clear eyes about the odds.",
      "You are responsible for finding your own supervising attorney; the State Bar does not place you with one.",
    ],
    steps: [
      "Confirm your supervising attorney meets the 5-year active-practice requirement and is willing to commit to weekly, in-person supervision for 4 years.",
      "Register as a law student with the State Bar within 90 days of starting your study.",
      "Complete Year 1 of structured study (roughly equivalent to a 1L curriculum) and sit the Baby Bar at the next available administration.",
      "Pass the Baby Bar within 3 attempts to preserve credit for Year 1 and continue.",
      "Complete Years 2–4, filing required study affidavits with the State Bar as directed.",
      "Apply to sit the California Bar Examination and complete the moral character determination process.",
    ],
  },
  {
    slug: "vermont",
    name: "Vermont",
    abbreviation: "VT",
    type: "active",
    programName: "Law Office Study Program",
    governingBody: "Vermont Board of Bar Examiners",
    governingRule: "Rules of Admission to the Bar of the Vermont Supreme Court, Rule 6",
    officialSite: "vermontjudiciary.org",
    summary:
      "Vermont is often called the friendliest reading-the-law state: there's no separate first-year exam like California's Baby Bar, the rules are comparatively short, and the state has a long, quiet history of admitting law-office-trained lawyers.",
    duration: "4 years of full-time study in a law office",
    weeklyCommitment:
      "Full-time equivalent study (commonly treated as at least 25–30+ hours per week) for four 12-month periods",
    supervisor:
      "An active member of the Vermont bar in good standing, typically expected to have several years of active practice experience and the availability to directly supervise and evaluate your work.",
    supervisorShort: "Active VT bar member in good standing",
    registration:
      "You register your course of study with the Vermont Board of Bar Examiners at the outset and typically file periodic certifications of satisfactory progress from your supervising attorney throughout the 4 years.",
    milestoneExam: null,
    barExamNote:
      "Vermont has no separate first-year 'baby bar' style exam. Your progress is certified by your supervising attorney at intervals set by the Board, and you sit the Vermont Bar Examination (Vermont administers the Uniform Bar Examination) after completing the full course of study.",
    highlights: [
      "No mid-program licensing exam comparable to California's Baby Bar — one less high-stakes gate before you reach the bar exam itself.",
      "Vermont accepts the Uniform Bar Exam (UBE), so a passing UBE score can potentially be transferred to other UBE jurisdictions later, subject to that jurisdiction's own admission rules.",
      "A small, personal Board of Bar Examiners that has worked with law readers for a long time.",
    ],
    considerations: [
      "Vermont has very few practicing attorneys relative to other states, which can make finding a willing, qualified supervising attorney harder simply due to numbers.",
      "Because there's no interim exam, your only true checkpoint before the bar exam is your supervisor's periodic certification — pick a rigorous supervisor, not just an available one.",
      "Housing and relocating to Vermont (if you don't already live there) is a real practical cost to weigh against the tuition savings.",
    ],
    steps: [
      "Identify and secure a Vermont-licensed supervising attorney willing to commit to a 4-year course of study.",
      "Submit your registration and proposed course of study to the Vermont Board of Bar Examiners for approval.",
      "Complete each 12-month period with your supervisor filing the required certification of progress.",
      "Apply to sit the Vermont Bar Examination after completing the full 4-year course of study.",
      "Complete the character and fitness review process.",
    ],
  },
  {
    slug: "virginia",
    name: "Virginia",
    abbreviation: "VA",
    type: "active",
    programName: "Virginia Law Reader Program",
    governingBody: "Virginia Board of Bar Examiners",
    governingRule: "Rules of the Supreme Court of Virginia, Part 1A, Rule 1A:2 (Law Reader Regulations)",
    officialSite: "vbbe.state.va.us",
    summary:
      "Virginia's 'Law Reader' program is small, selective, and demands more from the supervising attorney than any other state's — your sponsor needs a decade of active practice. It produces very few new lawyers each year, but it has a real track record.",
    duration: "3 years of full-time reading under a single sponsoring attorney",
    weeklyCommitment: "At least 25 hours per week, at least 40 weeks per year, for 3 years",
    supervisor:
      "An active member of the Virginia State Bar who has been engaged in the active practice of law for at least 10 years — a notably higher bar than California, Vermont, or Washington require.",
    supervisorShort: "Attorney with 10+ yrs active practice",
    registration:
      "Both the reader and the sponsoring attorney must apply to and be approved by the Virginia Board of Bar Examiners before the clerkship begins; the Board reviews the sponsoring attorney's qualifications directly.",
    milestoneExam: null,
    barExamNote:
      "There is no separate first-year exam. The sponsoring attorney is responsible for directing a structured reading course (Virginia publishes a reading list/outline expectation) and periodically certifying progress to the Board. You sit the Virginia Bar Examination after completing the 3-year program and Board approval.",
    highlights: [
      "Shortest duration of the four active pure-apprenticeship states — 3 years instead of 4.",
      "The 10-year practice requirement for sponsors tends to mean readers train under genuinely experienced attorneys.",
      "Virginia's program has been used successfully by a number of well-known law readers, giving it a credible track record.",
    ],
    considerations: [
      "The 10-year sponsor requirement is the biggest practical bottleneck — it meaningfully narrows the pool of attorneys who qualify, on top of those willing to take on the multi-year commitment.",
      "Because both reader and sponsor must be approved by the Board before starting, you cannot begin informally the way you can in some other states — plan for an approval process up front.",
      "The program admits very small numbers of readers per year statewide, so treat any given attorney's willingness to sponsor as the scarce resource it is.",
    ],
    steps: [
      "Find a Virginia-licensed attorney with at least 10 years of active practice who is willing to sponsor you and can commit the required supervision time.",
      "Submit a joint application to the Virginia Board of Bar Examiners for approval of both reader and sponsor before beginning.",
      "Once approved, begin the 3-year, 25-hour-per-week course of directed reading and practical work.",
      "Have your sponsor certify your progress to the Board at the required intervals.",
      "Apply to sit the Virginia Bar Examination after completing the program and receiving Board sign-off.",
    ],
  },
  {
    slug: "washington",
    name: "Washington",
    abbreviation: "WA",
    type: "active",
    programName: "Law Clerk Program (APR 6)",
    governingBody: "Washington State Bar Association (WSBA), under the Washington Supreme Court's Admission and Practice Rules",
    governingRule: "Admission and Practice Rule (APR) 6",
    officialSite: "wsba.org",
    summary:
      "Washington's Law Clerk Program is the most structured of the four active pathways — it comes with a defined curriculum framework, required periodic exams administered by your mentor, and close WSBA oversight, which some apprentices find reassuring and others find bureaucratic.",
    duration: "4 years of full-time law clerking",
    weeklyCommitment: "At least 32 hours per week, for at least 44 weeks per year, across the 4 years",
    supervisor:
      "An actively practicing Washington-licensed judge or lawyer who has practiced for at least 10 years, approved by the WSBA as your 'tutor'; a tutor generally may supervise only one law clerk at a time.",
    supervisorShort: "Judge or lawyer with 10+ yrs, WSBA-approved",
    registration:
      "You and your tutor jointly apply to the WSBA before you begin, including a proposed course of study; the WSBA's Law Clerk Program Board reviews and must approve the arrangement.",
    milestoneExam: "WSBA-administered periodic subject examinations throughout the program",
    barExamNote:
      "Instead of one big first-year exam, Washington requires your tutor to test you on each completed subject throughout the 4 years and report results to the WSBA, plus periodic reports of satisfactory progress. You apply to sit the Washington Bar Examination after the WSBA certifies you've completed the program.",
    highlights: [
      "The most clearly defined curriculum of the four programs, which can make planning your study easier if you like structure.",
      "Ongoing subject exams throughout the program surface weak spots early instead of all at once, unlike California's single high-stakes Baby Bar.",
      "Washington's WSBA plays an active, hands-on administrative role, which means less ambiguity about what's expected of you.",
    ],
    considerations: [
      "The 10-year tutor requirement plus a strict one-clerk-at-a-time rule narrows your pool of potential mentors.",
      "The WSBA's ongoing exam and reporting requirements mean more paperwork and more regular high-stakes assessment than Vermont's lighter-touch model.",
      "As with the other programs, you must locate and persuade your own tutor — WSBA does not match you with one.",
    ],
    steps: [
      "Find a Washington-licensed judge or attorney with 10+ years of active practice willing to serve as your tutor and take on only one clerk.",
      "Submit a joint application with your proposed course of study to the WSBA Law Clerk Program Board for approval.",
      "Begin the 4-year, 32-hour-per-week clerkship, sitting each subject exam your tutor administers along the way.",
      "Maintain the required periodic progress reports to the WSBA.",
      "Apply to sit the Washington Bar Examination once the WSBA certifies completion of the program.",
    ],
  },
  {
    slug: "maine",
    name: "Maine",
    abbreviation: "ME",
    type: "hybrid",
    programName: "Combined Law Office Study / Law School Program",
    governingBody: "Maine Board of Bar Examiners",
    governingRule: "Maine Bar Admission Rules (Rule 10 and related provisions)",
    officialSite: "courts.maine.gov",
    summary:
      "Maine does not offer a pure, law-school-free apprenticeship. Instead it allows candidates to combine a period of ABA-accredited law school with a period of law office study — a hybrid route, not a full substitute for law school.",
    duration: "Typically framed as roughly 1 year of ABA law school plus 2 years of law office study, or similar Board-approved combinations",
    weeklyCommitment: "Full-time study for the law-office-study portion, at a level the Board considers equivalent to full-time law study",
    supervisor: "A qualified, actively practicing Maine attorney approved by the Board of Bar Examiners for the law-office-study portion.",
    supervisorShort: "Board-approved Maine attorney",
    registration: "Requires advance approval of your specific combined course of study from the Maine Board of Bar Examiners.",
    milestoneExam: null,
    barExamNote:
      "Because this is a hybrid pathway, you still need to gain admission to and complete part of an ABA-accredited law school program before or alongside your law-office study, then sit the Maine Bar Examination once the Board certifies your combined course of study is complete.",
    highlights: [
      "Can reduce total law school tuition compared to a full three-year JD, since part of your training happens in a law office instead.",
      "Still gives you real law school credentials and classroom grounding for part of your legal education.",
    ],
    considerations: [
      "This is not a debt-free path — you still pay for a meaningful chunk of law school tuition.",
      "The exact combination of school time and office time requires individualized Board approval, so you can't just DIY a schedule the way California or Vermont apprentices largely can.",
      "Because it's a hybrid, most of the community and infrastructure built around 'pure' reading-the-law states doesn't map directly onto Maine's process.",
    ],
    steps: [
      "Contact the Maine Board of Bar Examiners early to discuss and get approval for your proposed combination of law school and law office study.",
      "Complete the ABA-accredited law school portion of your approved plan.",
      "Complete the law-office-study portion under a Board-approved supervising attorney.",
      "Apply to sit the Maine Bar Examination once the Board certifies your combined study is complete.",
    ],
  },
  {
    slug: "new-york",
    name: "New York",
    abbreviation: "NY",
    type: "hybrid",
    programName: "Law Office Study (Combination) Program",
    governingBody: "New York State Board of Law Examiners / Appellate Division",
    governingRule: "Rules of the Court of Appeals for Admission of Attorneys and Counselors at Law, §520.4",
    officialSite: "nybarexam.org",
    summary:
      "New York allows a 'combination' of law school and law office study — most commonly cited as 1 year of ABA-accredited law school followed by 3 years of full-time law office study — but it is not a way to become a lawyer with zero law school.",
    duration: "Commonly structured as 1 year of ABA law school plus 3 years of law office study (other Board-approved combinations exist)",
    weeklyCommitment: "Full-time study for the law-office-study years, generally treated as equivalent to full-time law school attendance",
    supervisor: "A qualified, actively practicing New York attorney (or judge) whose supervision arrangement satisfies the Board of Law Examiners.",
    supervisorShort: "Board-approved NY attorney or judge",
    registration: "Requires registration and ongoing compliance filings with the New York State Board of Law Examiners.",
    milestoneExam: null,
    barExamNote:
      "You still sit the New York Bar Examination (New York is a UBE jurisdiction) after completing your combined course of study and receiving the Board's certification.",
    highlights: [
      "One of the very few states besides Maine that still runs any form of combination program, giving New York-based apprentices a real, if partial, alternative to three full years of law school tuition.",
      "New York's size means a somewhat larger pool of attorneys, though few are experienced with combination-study supervision specifically.",
    ],
    considerations: [
      "You must still be admitted to and complete a year of ABA-accredited law school — this is not a law-school-free route.",
      "New York's process and paperwork are administered centrally by the Board of Law Examiners and require careful, early coordination.",
      "This path is uncommon enough that few current attorneys or law schools have direct experience advising candidates through it — expect to do extra homework.",
    ],
    steps: [
      "Confirm your specific combination plan is acceptable to the New York State Board of Law Examiners before starting.",
      "Complete the required law school portion at an ABA-accredited school.",
      "Complete the required law-office-study years under an approved supervising attorney, filing compliance reports as required.",
      "Apply to sit the New York Bar Examination once your combined study is certified complete.",
    ],
  },
];

export const activeStates = states.filter((s) => s.type === "active");
export const hybridStates = states.filter((s) => s.type === "hybrid");
