import aruba from './assets/Aruba.jpg'
import axel from './assets/Axel.jpg'
import harley from './assets/Harley.jpg'
import india from './assets/India.jpg'
import mario from './assets/Mario.jpg'
import mylo from './assets/Mylo.jpg'

export type KPI = {
  label: string
  score: number
  commentary: string
}

export type Dog = {
  name: string
  photo: string
  role: string
  breed: string
  age: string
  rating: 'Exceeds Expectations' | 'Meets Expectations' | 'Partially Meets' | 'Below Expectations' | 'Under Review'
  summary: string
  kpis: KPI[]
  incidents: string[]
  commendations: string[]
  developmentAreas: string[]
  managerNote: string
}

export const dogs: Dog[] = [
  {
    name: 'India',
    photo: india,
    role: 'Trainee, Behavioural Compliance',
    breed: 'Rescue Puppy',
    age: '~4 months',
    rating: 'Exceeds Expectations',
    summary:
      'The standout performer of the cohort, and at four months the youngest report under review. Closed the respiratory ticket she opened in Q1 and has now ceased indoor pooping entirely. Internalised the cage-to-garden ritual as a positive routine. Two material-property incidents on file, contextualised by age and rescue status.',
    kpis: [
      { label: 'Toilet Compliance', score: 94, commentary: 'No more pooping inside. Strongly attached to the cage-to-garden routine and now anticipates it.' },
      { label: 'Property Respect', score: 55, commentary: 'Active interest in the wooden dining table; blanket-based deterrents deployed by the household with limited success. One pair of footwear belonging to a non-resident colleague also affected.' },
      { label: 'Stakeholder Affection', score: 92, commentary: 'Responsive to praise; reciprocates warmly.' },
      { label: 'Composure Under Stimulus', score: 92, commentary: 'Calm. Did not contribute to internal escalations. Score age-adjusted: at four months, this is exceptional.' },
      { label: 'Mealtime Conduct', score: 92, commentary: 'Enthusiastic. Age-appropriate excitement around food, well-conducted in execution.' },
    ],
    commendations: [
      'Recovered from upper-respiratory issue ahead of schedule',
      'Eliminated indoor pooping incidents entirely by mid-period',
      'Demonstrably motivated by positive feedback. Exceptionally cost-effective to manage.',
      'For a four-month-old rescue: exceptional progress across the board',
    ],
    incidents: [
      'Repeated chewing of the wooden dining table; household has deployed blanket-based countermeasures with mixed results.',
      "Destruction of one (1) shoe belonging to Amjad. The reviewing manager extends sincere apologies (see Acknowledgement, below).",
      'Joint engagement (with Aruba) in stripping the plastic wrap from a potplant vase.',
    ],
    developmentAreas: [
      'Continue probationary cadence on toilet training to lock in gains',
      'Develop alternative outlets for the chewing drive (chew toys, frozen carrots)',
      "Recognise that not all leather objects in the house are owned by the household",
    ],
    managerNote:
      'India is the success story of the review period. Smart, eager, responsive to coaching, and exceptional for a four-month-old rescue. The shoe incident is regrettable; the table is wood and will, in the fullness of time, recover. Recommend continued development pathway with view to permanent placement.',
  },
  {
    name: 'Aruba',
    photo: aruba,
    role: 'Junior Associate, Dawn Operations',
    breed: 'Rescue Puppy',
    age: '~4 months',
    rating: 'Meets Expectations',
    summary:
      'A second strong four-month rescue performer. Made real headway on toilet training and has eliminated indoor pooping entirely. Carries one persistent quirk: an unwelcome post-deliverable QA process involving immediate re-consumption of own output. Will also activate stakeholders at 05:30 whether requested or not. Otherwise: smart, affectionate, and tracking well for her age.',
    kpis: [
      { label: 'Toilet Compliance', score: 85, commentary: 'No more pooping inside. Minor excitement-based leakage events persist.' },
      { label: 'Property Respect', score: 77, commentary: 'Joint engagement with the dining table; the household-deployed blanket layer has had mixed success.' },
      { label: 'Stakeholder Affection', score: 93, commentary: 'Affectionate, responsive to praise, ungovernable in the specific direction of joy.' },
      { label: 'Composure Under Stimulus', score: 82, commentary: 'High energy, improving channelisation. Score age-adjusted: at four months, well within range.' },
      { label: 'Mealtime Conduct', score: 40, commentary: 'Enthusiastic at the table itself; the score reflects only the post-deliverable QA process described above.' },
    ],
    commendations: [
      'Eliminated indoor pooping incidents entirely by mid-period',
      'Notably intelligent and responsive to praise',
      'Could be marketed externally as a premium alarm-clock product',
      'For a four-month-old rescue: strong overall trajectory',
    ],
    incidents: [
      'Repeated re-consumption of own toilet-training output (multiple occurrences)',
      'Unsanctioned 05:30 stakeholder activation events (ongoing)',
      'Joint participation in chewing of the wooden dining table',
      'Joint engagement (with India) in stripping the plastic wrap from a potplant vase',
      'Small excitement-based urination events (sub-clinical, but on file)',
    ],
    developmentAreas: [
      'Consider each deliverable a final artefact. Do not iterate on it.',
      'Reduce unrequested pre-dawn communications.',
      'Decouple emotional state from bladder state.',
    ],
    managerNote:
      'Aruba is smart, affectionate, improving, and (taking her age and rescue status into account) well on target. The appetite remains the principal area for development. Otherwise an unambiguously positive review.',
  },
  {
    name: 'Mylo',
    photo: mylo,
    role: 'Senior Specialist, Cuddles & Comfort',
    breed: 'Mini Long-haired Dachshund',
    age: 'Just over 1 year',
    rating: 'Meets Expectations',
    summary:
      'A genuinely sweet 1-on-1 contributor in the smallest physical envelope on the team. Closes warmly in close quarters; behaves less predictably in group settings. Reporting period bracketed by an unauthorised exit from supervision and a subsequent altercation with an external party (at his size, an inadvisable choice). Health flags raised by the day-care pickup contact for ongoing monitoring.',
    kpis: [
      { label: 'Toilet Compliance', score: 97, commentary: 'Long-tenured. No concerns.' },
      { label: 'Property Respect', score: 97, commentary: 'No destructive incidents on file.' },
      { label: 'Stakeholder Affection', score: 100, commentary: '1-on-1: industry-leading. Slept on the bed most nights; the alternative was barking.' },
      { label: 'Composure Under Stimulus', score: 53, commentary: 'Escaped harness; engaged in physical altercation; outcome unfavourable. A one-off, but on file.' },
      { label: 'Mealtime Conduct', score: 63, commentary: 'Caloric intake exceeds output. Flagged by day-care contact, not the reviewing manager alone.' },
    ],
    commendations: [
      'Outstanding bed-sharing performance throughout the review period',
      'Genuinely sweet in 1-on-1 contact. Among the best on the team in this regard.',
      'Reliable late-shift companion',
      'Effective at making his preferences known (see: bed access protocol)',
    ],
    incidents: [
      'Off-leash escape and third-party altercation; minor ear injury (healing well)',
      'Recurring upper-GI complaints',
      'Lower-back stiffness, suspected linked to over-conditioning and rough play',
    ],
    developmentAreas: [
      'Modest reduction in caloric intake recommended (flagged independently by day-care pickup, to be raised with Rose)',
      'De-escalate during off-site engagements',
      'Moderate the intensity of rough play, particularly while recovering. The breed has a long back and short legs and is opinionated about both.',
    ],
    managerNote:
      'Mylo is, one-to-one, one of the sweetest dogs on the team. The recommendation here is a slightly smaller portion, fewer fights, and a softer approach to play. The cuddling is non-negotiable and need not change.',
  },
  {
    name: 'Axel',
    photo: axel,
    role: 'Principal, Field Ops & Snack Acquisitions',
    breed: 'Staffordshire Bull Terrier',
    age: '2 years old',
    rating: 'Exceeds Expectations',
    summary:
      "A force-of-nature individual contributor, and (surprisingly, given the build) strikingly delicate when it matters. A lad, in the best possible sense: large, charismatic, popular, and capable of one (1) memorable kitchen incident per review period. Strong interpersonal skills, particularly with Gili, on whom he has been observed to physically sit. Medication adherence: excellent. Snack security: catastrophic.",
    kpis: [
      { label: 'Toilet Compliance', score: 95, commentary: 'No concerns.' },
      { label: 'Property Respect', score: 78, commentary: 'Bench breach + sealed-packaging defeat. Otherwise gentler than the dimensions suggest.' },
      { label: 'Stakeholder Affection', score: 96, commentary: 'Bonded deeply with Gili. Method: gravitational.' },
      { label: 'Composure Under Stimulus', score: 88, commentary: 'Unstoppable in the strictly literal sense, but knows when to switch it off.' },
      { label: 'Mealtime Conduct', score: 55, commentary: 'Self-service violation involving butter and uncooked kernels. Sofa-based dining.' },
    ],
    commendations: [
      '100% compliance with medication schedule',
      'Strong bonding outcomes with team member (Gili)',
      'Charismatic and physically impressive presence',
      'Notably gentle for his size. Handled the smaller cohort members (and a four-month-old in particular) with care.',
    ],
    incidents: [
      'Bench-top breach; consumption of sealed butter and popcorn kernels',
      'Sofa now carries a faint odour of a mid-budget cinema',
      'Body-slams reclassified as affection (no objections raised by recipient)',
    ],
    developmentAreas: [
      'Recognition that sealed packaging implies a decision',
      'Benches are load-bearing for kitchenware, not for Axel',
    ],
    managerNote:
      "Axel sleeps between Milli's room and the sofa, splits his attention between the family and his medication, and behaves (for the most part) like a gentleman of significant size. He is the kind of report who delivers on everything that matters and then eats a stick of butter. We accept this as part of the package.",
  },
  {
    name: 'Harley',
    photo: harley,
    role: 'Senior Director, Companionship',
    breed: 'Cockapoo',
    age: '3 years old',
    rating: 'Exceeds Expectations',
    summary:
      'Zero-incident review period. Delivered continuously against the affection mandate. Maintained operational proximity to the reviewing manager at all times. A model contributor and quietly indispensable.',
    kpis: [
      { label: 'Toilet Compliance', score: 98, commentary: 'Spotless record.' },
      { label: 'Property Respect', score: 100, commentary: 'No incidents. No reports. No suspicions.' },
      { label: 'Stakeholder Affection', score: 100, commentary: 'Little spoon. Cannot be improved upon.' },
      { label: 'Composure Under Stimulus', score: 92, commentary: 'Unflappable.' },
      { label: 'Mealtime Conduct', score: 95, commentary: 'Polite, present, gone.' },
    ],
    commendations: [
      'Embodied the soft-soul brand of the organisation',
      '100% attendance at the side of the reviewing manager',
      'Set a benchmark for in-bed cohabitation across the cohort',
    ],
    incidents: [],
    developmentAreas: [
      'None identified. Continue.',
    ],
    managerNote:
      'If every report were Harley, performance reviews would not exist. Recommend immediate promotion and a small, undeserved bonus for the rest of the cohort by association.',
  },
  {
    name: 'Mario',
    photo: mario,
    role: 'Junior Associate, Energy & Provocations',
    breed: 'Desert Mix',
    age: '~7–8 months',
    rating: 'Below Expectations',
    summary:
      'A highly intelligent and energetic adolescent contributor in the wrong placement. Surplus energy redirected into peer agitation, after-hours barking, and the destruction of three discrete items of property (one sentimental risk, one beanbag, one pair of Birkenstocks). Strong fit for a household with an active young owner who can absorb the output hour for hour.',
    kpis: [
      { label: 'Toilet Compliance', score: 62, commentary: 'Improving, but continues to mark outdoor furniture as in-scope.' },
      { label: 'Property Respect', score: 22, commentary: 'Three confirmed destructive incidents in fourteen days. Trajectory unfavourable.' },
      { label: 'Stakeholder Affection', score: 50, commentary: 'Bright and engaged, but the energy is the energy. Affection is not the predominant interaction style.' },
      { label: 'Composure Under Stimulus', score: 35, commentary: 'Escalates rather than de-escalates. Active after dark.' },
      { label: 'Mealtime Conduct', score: 62, commentary: 'Acceptable when actively micromanaged; less so when left to his own devices.' },
    ],
    commendations: [
      'Notably intelligent and trainable',
      'Strong potential fit for a high-energy household with an active young owner',
      'Settled with strangers in the house by the end of the period',
    ],
    incidents: [
      "Unauthorised entry to Milli's room; one (1) item of soft furnishing destroyed. Item cleared by Rose. Hoping it was not sentimental.",
      'Destruction of outdoor beanbag; tied off and set aside for assessment',
      'Total loss of one (1) pair of Birkenstocks',
      'Suspected (unconfirmed) responsibility for chewing one corner of the entrance-hall seat',
      'Continued marking of outdoor furniture (improving, not yet resolved)',
      'Sustained after-hours barking (partially explained by unfamiliar staff in the household)',
      'Repeated agitation of peer team members',
    ],
    developmentAreas: [
      'Daytime energy expenditure plan required: longer walks, structured play',
      'Reduce instigation of cohort-wide chaos events',
      "Avoid Milli's room",
      'Reduce after-hours vocalisation',
    ],
    managerNote:
      'Mario is the smartest of the troublemakers, which is a difficult category to occupy gracefully. At seven months he is functionally a teenager with no school to send him to. Recommend matching to a household with a child who can match his energy hour for hour, and ideally one with no Birkenstocks.',
  },
]
