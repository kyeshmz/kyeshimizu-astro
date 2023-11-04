export default function NavigationItem({ href, title }: { href: string; title: string }) {
  return (
    <li className={'underline-offset-4	hover:underline'}>
      <a href='' rel='prefetch-intent' className={''}>
        {title}
      </a>
    </li>
  )
}
