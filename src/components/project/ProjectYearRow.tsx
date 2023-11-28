import type { CollectionEntry } from 'astro:content'
import { Spacer } from '../layout/Spacer'
import ProjectListItemWrap from './ProjectListItemWrap'
import ProjectTag from './ProjectTag'

export default function ProjectYearRow({
  sortedYears,
  postsByYear,
  tags,
}: {
  sortedYears: string[]
  postsByYear: { [year: string]: CollectionEntry<'projects'>[] }
  tags: string
}) {
  return sortedYears.map((year: string) => (
    <div className='pb-16 animate-in  duration-700 fade-in fade-out' key={year}>
      <span className={'block float-right text-xs leading-4 tracking-wide '}>{year}</span>

      <ul
        className={
          'flex w-11/12 gap-x-20 gap-y-11 flex-wrap md:flex-row flex-col animate-in  duration-700 fade-in fade-out'
        }
      >
        {postsByYear[Number.parseInt(year)].map((post: any) => (
          <ProjectListItemWrap
            animate-in
            duration-700
            fade-in
            fade-outmWrap
            title={post.data.title}
            key={post.data.title}
          >
            <a
              href={'/projects/' + post.data.title.toLocaleLowerCase().replace(/\s/g, '-')}
              data-astro-prefetch
            >
              {post.data.date}
            </a>
            <a
              href={'/projects/' + post.data.title.toLocaleLowerCase().replace(/\s/g, '-')}
              data-astro-prefetch
              className={'letter-spacing-2 underline underline-offset-4 leading-2'}
            >
              {post.data.title}
            </a>
            <Spacer size={8} />

            {post.data.tags.map((tag: string, i: number) => {
              return <ProjectTag title={tag} isSelected={tag === tags} key={i} />
            })}
          </ProjectListItemWrap>
        ))}
      </ul>
    </div>
  ))
}
