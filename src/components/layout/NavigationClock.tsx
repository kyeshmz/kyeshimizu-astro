import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { Suspense, useEffect, useState } from 'react'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Tokyo')

export default function NavigationClock() {
  const [time, setTime] = useState(dayjs().tz('Asia/Tokyo').format('hh:mm a - MMMM d, YYYY (Z)'))

  useEffect(() => {
    const intervalCallback = setInterval(() => {
      setTime(dayjs().tz('Asia/Tokyo').format('hh:mm a - MMMM d, YYYY (Z)'))
    }, 1000)
    return () => clearInterval(intervalCallback)
  }, [])

  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour12: true,
    timeZone: 'Asia/Tokyo',
  }
  return (
    <Suspense
      fallback={
        <p className='text-[13px] leading-4 tracking-wide float-right m-0 p-0 hidden md:inline'>
          TYO: {new Intl.DateTimeFormat('en-US', options).format(Date.now())}
        </p>
      }
    >
      <p className='text-[13px] leading-4 tracking-wide float-right m-0 p-0 hidden md:inline'>
        TYO: {time}
      </p>
    </Suspense>
  )
}
