import { $projectHoverImageAtom } from '../state/ProjectHoverState'
import { Works } from '../types/works'
import ProjectListItem from './ProjectListItem'

export default function ProjectYearList({ year }: { year: number }) {
  return (
    <div className={'mb-14 w-100 overflow-hidden'}>
      <span className={'cursor-pointer block float-right text-xs leading-4 tracking-wide '}>
        {year.toString()}
      </span>
      <ul className={'flex w-11/12 gap-x-20 gap-y-11 flex-wrap md:flex-row flex-col'}>
        <ProjectListItem
          title={Works.RhizomatiksFencing}
          date='8-16-2023'
          tags={['Art Direction', 'Art Direction', 'Art Direction', 'Art Direction']}
        />
        <ProjectListItem
          title={Works.RhizomatiksFencing}
          tags={['Art Direction', 'Art Direction', 'Art Direction', 'Art Direction']}
          date='8-16-2023'
        />
      </ul>
    </div>
  )
}
