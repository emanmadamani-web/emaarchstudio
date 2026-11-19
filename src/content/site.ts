/**
 * All editorial content for the EMA Architecture Studio site lives here.
 * Replace project names, locations and figures with the studio's real portfolio.
 */

export const studio = {
  name: 'EMA Architecture Studio',
  founder: 'Eman Moadamani',
  founderTitle: 'Founder & Principal Architect',
  email: 'info@emaarchstudio.com',
  tagline: 'Quiet Luxury in Timber & Stone',
}

export const nav = [
  { href: '#practice', label: 'Practice' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#process', label: 'Process' },
] as const

export type Service = {
  id: string
  numeral: string
  title: string
  lead: string
  body: string
  points: string[]
  image: string
  imageAlt: string
}

export const services: Service[] = [
  {
    id: 'design',
    numeral: 'I',
    title: 'Design',
    lead: 'A home drawn around the way you live.',
    body: 'We begin with the site, the light and your daily rituals, then shape plans, sections and material palettes until every room feels inevitable.',
    points: [
      'Site & daylight studies',
      'Concept, plans & sections',
      'Interior architecture',
      'Material & joinery palette',
    ],
    image: 'interior.png',
    imageAlt:
      'Double-height living room with a travertine wall, oak ceiling slats and a stone fireplace',
  },
  {
    id: 'permits',
    numeral: 'II',
    title: 'Permits & Compliance',
    lead: 'The paperwork, handled with the same care as the drawings.',
    body: 'We prepare complete building permit applications, coordinate engineers and authorities, and keep your design intact through every review.',
    points: [
      'Building permit applications',
      'Zoning & planning review',
      'Structural & energy coordination',
      'Authority dialogue & revisions',
    ],
    image: 'drawings.png',
    imageAlt:
      'Architectural plans and a white basswood house model under a brass desk lamp',
  },
  {
    id: 'build',
    numeral: 'III',
    title: 'Build',
    lead: 'From the first footing to the final brass reveal.',
    body: 'We tender, select craftsmen and oversee construction on site, so the stone, timber and detailing are built exactly as drawn.',
    points: [
      'Contractor tender & selection',
      'Site supervision',
      'Detail & quality control',
      'Handover & aftercare',
    ],
    image: 'material.png',
    imageAlt: 'Split natural stone meeting oiled oak and a thin brass reveal',
  },
]

export type Project = {
  slug: string
  name: string
  kind: string
  location: string
  year: string
  area: string
  materials: string
  description: string
  image: string
  imageAlt: string
}

export const projects: Project[] = [
  {
    slug: 'villa-kalksten',
    name: 'Villa Kalksten',
    kind: 'Private residence',
    location: 'Hillside, coastal ridge',
    year: '2025',
    area: '412 m²',
    materials: 'Board-formed concrete · Glass · Smoked oak',
    description:
      'Two cantilevered floors of glass held by a single concrete spine. Oak soffits carry warmth from the living spaces out over the terrace, while a long reflecting pool doubles the house at dusk.',
    image: 'villa-hero.png',
    imageAlt:
      'Modern concrete and glass villa at blue hour with a long reflecting pool',
  },
  {
    slug: 'lake-cabin',
    name: 'Stilla Lake Cabin',
    kind: 'Retreat',
    location: 'Lakeshore, northern forest',
    year: '2024',
    area: '96 m²',
    materials: 'Charred spruce · Pine · Low-iron glass',
    description:
      'A Scandinavian gable opened entirely to the water. By night the timber interior becomes a lantern on the shore, reflected in the still black lake.',
    image: 'cabin-lake.png',
    imageAlt:
      'Scandinavian wooden cabin with a glass gable glowing beside a still lake at night',
  },
]

export const process = [
  {
    step: '01',
    title: 'Conversation',
    text: 'A first meeting on site or in the studio to understand your plot, your budget and how you want to live.',
  },
  {
    step: '02',
    title: 'Concept',
    text: 'Sketches, massing models and a material story — the moment the home first becomes visible.',
  },
  {
    step: '03',
    title: 'Permit',
    text: 'Technical drawings and a complete application, coordinated with engineers and authorities.',
  },
  {
    step: '04',
    title: 'Build',
    text: 'Tender, craftsmen and site supervision until the last joint is resolved.',
  },
  {
    step: '05',
    title: 'Home',
    text: 'Handover of a finished house — and the keys to a place made to last generations.',
  },
]

export const projectTypes = [
  'New private home',
  'Cabin or retreat',
  'Extension or renovation',
  'Building permit only',
] as const

export const stages = [
  'Looking for a plot',
  'I own a plot',
  'I have drawings, need a permit',
  'Permit approved, ready to build',
] as const
