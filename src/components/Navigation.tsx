import dayjs from '../lib/day'
import NavigationItem from './NavigationItem'

export default function Navigation() {
  return (
    <header class='fixed left-0 top-0 w-full z-50 bg-white'>
      <div className={'py-6 w-15 mx-6  md:mx-28 my-0'}>
        <h1 class='fixed left-7'>
          <a href='/' rel='prefetch-intent'>
            K / S
          </a>
        </h1>
        <nav class='flex md:justify-between items-center justify-end'>
          <ul class='list-none m-0 p-0 flex gap-5'>
            <NavigationItem href='' title='About' />
            <NavigationItem href='' title='Projects' />
            <NavigationItem href='' title='Studies' />
            <NavigationItem href='' title='Store' />
          </ul>
          <p class='text-[13px] leading-4 tracking-wide float-right m-0 p-0 hidden md:inline'>
            TYO: {dayjs().tz('Asia/Tokyo').format('hh:mm a - MMMM d, YYYY (Z)')}
          </p>
        </nav>
      </div>
    </header>
  )
}
