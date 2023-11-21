import { atom } from 'nanostores'
import { proxy } from 'valtio/vanilla'
import type { WorkType } from '../types/works'

export const $projectHoverImageAtom = atom<WorkType | null>(null)

export const projectHoverImageAtom = proxy<{ state: WorkType | null }>({ state: null })
