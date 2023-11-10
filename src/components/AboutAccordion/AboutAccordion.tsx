import { Accordion } from '../ui/accordion'

import PublicationTable, { type PublicationTableRow } from './publications/PublicationsTable'

import PublicationsTable from './publications/PublicationsTable'

import { PublicationTableColumn } from '@/src/components/AboutAccordion/publications/PublicationsTable'

import MediaTable, { MediaTableColumn, type MediaTableRow } from './media/MediaTable'
import ExhibitionsTable, {
  DataTableColumns,
  type ExhibitionTableRow,
} from './exhibition/ExhibitionsTable'
import TalksTable, { TalksTableColumn, type TalkTableRow } from './talks/TalksTable'
import AwardTable, { type AwardTableRow } from './award/AwardTable'
import { AwardTableColumn } from '@/src/components/AboutAccordion/award/AwardTable'

export default function AboutAccordion({
  PublicationData,
  MediaData,
  ExhibitionData,
  TalkData,
  AwardData,
}: {
  PublicationData: PublicationTableRow[]
  MediaData: MediaTableRow[]
  ExhibitionData: ExhibitionTableRow[]
  TalkData: TalkTableRow[]
  AwardData: AwardTableRow[]
}) {
  return (
    <Accordion type='single' collapsible className='w-full'>
      <ExhibitionsTable columns={DataTableColumns} data={ExhibitionData}></ExhibitionsTable>
      <PublicationsTable
        columns={PublicationTableColumn}
        data={PublicationData}
      ></PublicationsTable>
      <AwardTable columns={AwardTableColumn} data={AwardData}></AwardTable>
      <TalksTable columns={TalksTableColumn} data={TalkData}></TalksTable>
      <MediaTable columns={MediaTableColumn} data={MediaData}></MediaTable>
    </Accordion>
  )
}
