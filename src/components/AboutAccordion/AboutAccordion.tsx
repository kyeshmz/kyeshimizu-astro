import ExhibitionTable, { DataTableColumns } from './exhibition/ExhibitionsTable'
import { Accordion } from '../ui/accordion'
import { ExhibitionData } from './exhibition/ExhibitionData'
import { AccordionItem } from '@/src/components/ui/accordion'
import PublicationTable, { type PublicationTableRow } from './publications/PublicationsTable'

import PublicationsTable from './publications/PublicationsTable'
import ExhibitionsTable from './exhibition/ExhibitionsTable'

import { PublicationTableColumn } from '@/src/components/AboutAccordion/publications/PublicationsTable'
import TalksTable, { TalksTableColumn } from './talks/TalksTable'

import MediaTable, { MediaTableColumn } from './media/MediaTable'
import { MediaData } from '@/src/components/AboutAccordion/media/MediaData'

export default function AboutAccordion({
  PublicationData,
}: {
  PublicationData: PublicationTableRow[]
}) {
  return (
    <Accordion type='single' collapsible className='w-full'>
      {/* <ExhibitionsTable columns={DataTableColumns} data={ExhibitionData}></ExhibitionsTable> */}
      <PublicationsTable
        columns={PublicationTableColumn}
        data={PublicationData}
      ></PublicationsTable>
      {/* <TalksTable columns={TalksTableColumn} data={TalksData}></TalksTable>
      <MediaTable columns={MediaTableColumn} data={MediaData}></MediaTable> */}
    </Accordion>
  )
}
