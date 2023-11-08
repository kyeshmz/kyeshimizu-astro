import { Accordion } from './ui/accordion'

export default function TableWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Accordion type='single' collapsible className='w-full'>
      {children}
    </Accordion>
  )
}
