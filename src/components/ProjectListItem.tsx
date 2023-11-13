import { $projectHoverImageAtom } from '../state/ProjectHoverState'
import ProjectTag from './ProjectTag'
import { type WorkType } from '@/src/types/works'

export default function ProjectListItem({
  date,
  title,
  tags,
}: {
  date: string
  title: WorkType
  tags: Array<string>
}) {
  return (
    <li
      className={'flex flex-col w-6/12 max-w-[160px] animate-in  duration-700 fade-in fade-out'}
      onMouseEnter={() => {
        $projectHoverImageAtom.set(title)
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
      <div className=''>
        {tags.map((tag, i) => {
          return <ProjectTag title={tag} key={i}></ProjectTag>
        })}
      </div>
    </li>
  )
}
