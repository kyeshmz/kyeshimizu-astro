import clsx from 'clsx'

export default function ProjectTag({ title, isSelected }: { title: string; isSelected: boolean }) {
  const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1)

  return (
    <a
      href={'/types/' + title}
      rel={'prefetch-intent'}
      className={clsx(isSelected ? 'font-semibold' : '')}
    >
      {formattedTitle},
    </a>
  )
}
