import dayjs from '../lib/day'
import NavigationItem from './NavigationItem'

export default function Navigation() {
  return (
    <header className='fixed left-0 top-0 w-full z-50 bg-white'>
      <div className={'py-6 w-15 mx-6  md:mx-28 my-0'}>
        <h1 className='fixed left-7'>
          <a href='/' rel='prefetch-intent'>
            K / S
          </a>
        </h1>
        <nav className='flex md:justify-between items-center justify-end'>
          <ul className='list-none m-0 p-0 flex gap-5'>
            <NavigationItem title='About' />
            <NavigationItem title='Projects' />
            <li className={'underline-offset-4	hover:underline'}>
              <a
                href={
                  'https://docs.google.com/document/d/1RqA2MraEd-mTt8dUOvBCjQ2gB9e0jYut/edit?usp=sharing&ouid=100481767147351988160&rtpof=true&sd=true'
                }
                className={''}
              >
                CV
              </a>
            </li>

            {/* <NavigationItem title='Studies' />
            <NavigationItem title='Store' /> */}
          </ul>
          <p className='text-[13px] leading-4 tracking-wide float-right m-0 p-0 hidden md:inline'>
            TYO: {dayjs().tz('Asia/Tokyo').format('hh:mm a - MMMM d, YYYY (Z)')}
          </p>
        </nav>
      </div>
    </header>
  )
}
