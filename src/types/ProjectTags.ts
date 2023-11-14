export const ProjectTags = {
  research: 'research',
  installation: 'installation',
  fashion: 'fashion',
  academic: 'academic',
  engineering: 'engineering',
  app: 'app',
} as const // as constをつけることでWideningされないように✅

export type ProjectTagsType = keyof typeof ProjectTags
