import { $projectHoverImageAtom, ProjectName } from '../state/projectHoverImage'
import ProjectTag from './ProjectTag'

export default function ProjectListItem({ onMouseEnter }: { onMouseEnter: () => void }) {
  return (
    <li
      className={'flex flex-col w-6/12 max-w-[160px] animate-in  duration-700 fade-in fade-out'}
      onMouseEnter={() => {
        onMouseEnter()
      }}
      onMouseLeave={() => {
        $projectHoverImageAtom.set(null)
      }}
    >
      <a href={''} rel={'preload-intent'} className={''}>
        8-16-2023
      </a>
      <a href='' className={'letter-spacing-2 underline underline-offset-4 leading-2'}>
        Mac Miller
      </a>
      <div className=''>
        {/* TODO : we render enough of these as there are in the frontmatter */}
        <ProjectTag title='Art Direction'></ProjectTag>{' '}
        <ProjectTag title='Art Direction'></ProjectTag>
        <ProjectTag title='Art Direction'></ProjectTag>
        <ProjectTag title='Art Direction'></ProjectTag>
        <ProjectTag title='Art Direction'></ProjectTag>
        <ProjectTag title='Art Direction'></ProjectTag>
      </div>
    </li>
  )
}
