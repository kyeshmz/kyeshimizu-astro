import { type WorkType } from '@/src/types/works'

import { Suspense } from 'react'
import { Loader2 } from 'lucide-react'
import { $projectHoverImageAtom } from '../../state/ProjectHoverState'
import { Spacer } from '../layout/Spacer'
import ProjectTag from './ProjectTag'

export default function ProjectListItem({
  date,
  title,
  tags,
  selectedTag,
}: {
  date: string
  title: WorkType
  tags: Array<string>
  selectedTag?: string
}) {
  return (
    <Suspense fallback={<Loader2 className='h-4 w-4 animate-spin' />}>
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
        <a
          href={'/projects/' + title.toLocaleLowerCase().replace(/\s/g, '-')}
          rel={'preload-intent'}
          className={''}
        >
          {date}
        </a>
        <a
          href={'/projects/' + title.toLocaleLowerCase().replace(/\s/g, '-')}
          rel={'preload-intent'}
          className={'letter-spacing-2 underline underline-offset-4 leading-2'}
        >
          {title}
        </a>
        <Spacer size={8}></Spacer>

        {tags.map((tag, i) => {
          return <ProjectTag title={tag} key={i} isSelected={tag === selectedTag}></ProjectTag>
        })}
      </li>
    </Suspense>
  )
}
