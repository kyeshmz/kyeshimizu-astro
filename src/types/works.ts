export const Works = {
  harmonize: 'Harmonize',
  algorithmic_couture: 'Algorithmic Couture',
  aubik: 'Aubik',
  morphing_identity: 'Morphing Identity',
} as const

// type SizeType = 'small' | 'medium' | 'large'
export type WorkType = (typeof Works)[keyof typeof Works]
