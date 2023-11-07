import { atom } from 'nanostores'

export const ProjectName = {
  RhizomatiksFencing: 'Rhizomatiks Fencing',
  Synflux: 'Synflux'
} as const // as constをつけることでWideningされないように✅

export type ProjectNameType = (typeof ProjectName)[keyof typeof ProjectName] | null

export const $projectHoverImageAtom = atom<ProjectNameType>(null)
