export default function ProjectTag({ title }: { title: string }) {
  const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1)

  return (
    <a href={'/types/' + title} rel={'prefetch-intent'}>
      {formattedTitle},
    </a>
  )
}
