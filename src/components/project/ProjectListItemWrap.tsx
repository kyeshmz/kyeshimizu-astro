import { Suspense } from 'react'
import { $projectHoverImageAtom } from '../../state/ProjectHoverState'

export default function ProjectListItemWrap({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={<li className={'flex flex-col w-6/12 max-w-[160px]  flex-wrap '}>{children}</li>}
    >
      <li
        className={'flex flex-col w-6/12 max-w-[160px]  flex-wrap '}
        onMouseEnter={() => {
          $projectHoverImageAtom.set(title)
          console.log('hover set to : ', title)
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
