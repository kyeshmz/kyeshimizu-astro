export default function ProjectTag({ title }: { title: string }) {
  return (
    <a
      // href={'/type/' + title}
      href=''
      rel={'prefetch-intent'}
    >
      {title},
    </a>
  )
}
