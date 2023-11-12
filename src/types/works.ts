export const Works = {
  Harmonize: 'Harmonize',
  AlgorithmicCouture: 'Algorithmic Couture',
  Aubik: 'Aubik',
  MorphingIdentity: 'Morphing Identity',
  DeviationGame: 'Deviation Game',
  RhizomatiksFencing: 'Rhizomatiks Fencing',
  Synflux: 'Synflux',
  BaobaoDazzle: 'Baobao Dazzle',
  DoubleHorizon: 'Double Horizon',
  UrbanOrchestra: 'Urban Orchestra',
  SoranoProjection: 'Sorano Projection',
  HumanLatentMetrics: 'Human Latent Metrics',
  Nanco: 'Nanco',
  Xenon: 'Xenon',
} as const

// type SizeType = 'small' | 'medium' | 'large'
export type WorkType = (typeof Works)[keyof typeof Works]
