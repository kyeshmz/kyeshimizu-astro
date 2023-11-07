export const ProjectTags = {
  ConceptDevelopment: 'Concept Development',
  Brading: 'Branding',
  ClientWork: 'Client Work',
  Research: 'Research',
} as const // as constをつけることでWideningされないように✅

export type ProjectTagsType = keyof typeof ProjectTags
