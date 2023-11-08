import ExhibitionTable, { columns } from './exhibition/ExhibitionTable'
import { Accordion } from '../ui/accordion'
import { ExhibitionData2 } from './exhibition/exhibitionData'

export default function AboutAccordion() {
  return (
    <Accordion type='single' collapsible className='w-full' defaultValue='item-1'>
      <ExhibitionTable columns={columns} data={ExhibitionData2}></ExhibitionTable>
    </Accordion>
  )
}
