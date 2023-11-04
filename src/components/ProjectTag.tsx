export default function ProjectTag({ title }: { title: string }) {
  return (
    <a href={'/type/' + title} rel={'prefetch-intent'}>
      {title},
    </a>
  )
}
