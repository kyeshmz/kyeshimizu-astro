import { atom } from 'nanostores'
import type { WorkType } from '../types/works'

export const $projectHoverImageAtom = atom<WorkType | null>(null)
