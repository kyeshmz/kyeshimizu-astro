export default function NavigationItem({ title }: { title: string }) {
  return (
    <li className={'underline-offset-4	hover:underline'}>
      <a href={'/' + title.toLocaleLowerCase()} data-astro-prefetch className={''}>
        {title}
      </a>
    </li>
  )
}
