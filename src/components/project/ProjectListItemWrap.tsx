import { Suspense } from 'react'
import { $projectHoverImageAtom } from '../../state/ProjectHoverState'
import type { WorkType } from '../../types/works'

export default function ProjectListItemWrap({
  children,
  title,
}: {
  children: React.ReactNode
  title: WorkType | null
}) {
  return (
    <Suspense
      fallback={
        <li className={'flex flex-col h-full bg-slate-400 w-6/12 max-w-[160px]  flex-wrap '}>
          {children}
        </li>
      }
    >
      <li
        className={'flex flex-col w-6/12 max-w-[160px]  flex-wrap '}
        onMouseEnter={() => {
          $projectHoverImageAtom.set(title)
        }}
        onMouseLeave={() => {
          $projectHoverImageAtom.set(null)
        }}
      >
        {children}
      </li>
    </Suspense>
  )
}
