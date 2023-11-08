import ExhibitionTable, { DataTableColumns } from './exhibition/ExhibitionsTable'
import { Accordion } from '../ui/accordion'
import { ExhibitionData } from './exhibition/ExhibitionData'
import { AccordionItem } from '@/src/components/ui/accordion'
import PublicationTable from './publications/PublicationsTable'

import PublicationsTable from './publications/PublicationsTable'
import ExhibitionsTable from './exhibition/ExhibitionsTable'
import { PublicationData } from '@/src/components/AboutAccordion/publications/PublicationsData'
import { PublicationTableColumn } from '@/src/components/AboutAccordion/publications/PublicationsTable'
import TalksTable, { TalksTableColumn } from './talks/TalksTable'
import { TalksData } from './talks/TalksData'

export default function AboutAccordion() {
  return (
    <Accordion type='single' collapsible className='w-full'>
      <ExhibitionsTable columns={DataTableColumns} data={ExhibitionData}></ExhibitionsTable>
      <PublicationsTable
        columns={PublicationTableColumn}
        data={PublicationData}
      ></PublicationsTable>
      <TalksTable columns={TalksTableColumn} data={TalksData}></TalksTable>
    </Accordion>
  )
}
