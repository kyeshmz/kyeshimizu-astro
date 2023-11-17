import { ScrollArea, ScrollBar } from '../ui/scroll-area'

export default function PhotoAccordion() {
  return (
    <div className='relative'>
      <ScrollArea>
        <div className='flex space-x-4 pb-4'>
          <img
            className='h-[500px]  w-auto object-cover md:object-contain'
            src='https://images.unsplash.com/photo-1698948233567-341329ce43a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D'
          />
          <img
            className='h-[500px]  w-auto object-cover md:object-contain'
            src='https://images.unsplash.com/photo-1698948233567-341329ce43a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D'
          />
          <img
            className='h-[500px]  w-auto object-cover md:object-contain'
            src='https://images.unsplash.com/photo-1698948233567-341329ce43a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D'
          />
          <img
            className='h-[500px]  w-auto object-cover md:object-contain'
            src='https://images.unsplash.com/photo-1698948233567-341329ce43a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D'
          />
        </div>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
    </div>
  )
}
