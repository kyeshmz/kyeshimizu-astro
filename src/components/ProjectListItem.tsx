import { $projectHoverImageAtom } from '../state/ProjectHoverState'
import ProjectTag from './ProjectTag'
import { type WorkType } from '@/src/types/works'

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
    <li
      className={'flex flex-col w-6/12 max-w-[160px]  flex-wrap '}
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

      {tags.map((tag, i) => {
        return <ProjectTag title={tag} key={i} isSelected={tag === selectedTag}></ProjectTag>
      })}
    </li>
  )
}
