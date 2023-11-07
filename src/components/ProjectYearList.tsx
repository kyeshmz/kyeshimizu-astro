import { $projectHoverImageAtom } from '../state/projectHoverImage'
import ProjectListItem from './ProjectListItem'
import {ProjectName} from '@/src/state/projectHoverImage';

export default function ProjectYearList({ year }: { year: number }) {


  return (
    <div className={'mb-14 w-100 overflow-hidden'}>
      <span className={'cursor-pointer block float-right text-xs leading-4 tracking-wide '}>
        {year.toString()}
      </span>
      <ul className={'flex w-11/12 gap-x-20 gap-y-11 flex-wrap'}>
        <ProjectListItem
          onMouseEnter={() => {
            $projectHoverImageAtom.set(ProjectName.RhizomatiksFencing)
          }}
        />
        <ProjectListItem
          onMouseEnter={() => {
            $projectHoverImageAtom.set(ProjectName.Synflux)
          }}
        />
      </ul>
    </div>
  )
}
