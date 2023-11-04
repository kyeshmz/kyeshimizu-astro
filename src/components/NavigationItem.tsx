export default function NavigationItem({ title }: { title: string }) {
  return (
    <li className={'underline-offset-4	hover:underline'}>
      <a href={'/' + title.toLocaleLowerCase()} rel='prefetch-intent' className={''}>
        {title}
      </a>
    </li>
  )
}
