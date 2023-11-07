import { CalendarIcon } from 'lucide-react'
import { Button } from './ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'

export default function ExhibitionHoverCard({ title }: { title: string }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant='link'>@nextjs{title}</Button>
      </HoverCardTrigger>
      <HoverCardContent className='w-80'>
        <a href=''>
          <h4 className='text-sm font-semibold'>@nextjs</h4>
          <p className='text-sm'>The React Framework – created and maintained by @vercel.</p>
          <div className='flex items-center pt-2'>
            <CalendarIcon className='mr-2 h-4 w-4 opacity-70' />{' '}
            <span className='text-xs text-muted-foreground'>Joined December 2021</span>
          </div>
        </a>
        The React Framework – created and maintained by @vercel.
      </HoverCardContent>
    </HoverCard>
  )
}
