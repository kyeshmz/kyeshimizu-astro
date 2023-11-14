import { Accordion } from '../ui/accordion'
import AwardTable, { type AwardTableRow, AwardTableColumn } from './AwardTable'
import ExhibitionsTable, { type ExhibitionTableRow } from './ExhibitionsTable'
import MediaTable, { type MediaTableRow, MediaTableColumn } from './MediaTable'
import PublicationsTable, {
  type PublicationTableRow,
  PublicationTableColumn,
} from './PublicationsTable'
import TalksTable, { type TalkTableRow, TalksTableColumn } from './TalksTable'
import TeachingTable, { type TeachingTableRow } from './TeachingTable'
import { TeachingTableColumn } from '@/src/components/AboutAccordion/TeachingTable'
import { DataTableColumn } from '@/src/components/AboutAccordion/ExhibitionsTable'
import GrantsTable, { type GrantTableRow } from './GrantsTable'
import { GrantsTableColumn } from '@/src/components/AboutAccordion/GrantsTable'

export default function AboutAccordion({
  PublicationData,
  MediaData,
  ExhibitionData,
  TalkData,
  AwardData,
  TeachingData,
  GrantData,
}: {
  PublicationData: PublicationTableRow[]
  MediaData: MediaTableRow[]
  ExhibitionData: ExhibitionTableRow[]
  TalkData: TalkTableRow[]
  AwardData: AwardTableRow[]
  TeachingData: TeachingTableRow[]
  GrantData: GrantTableRow[]
}) {
  return (
    <Accordion
      // type='multiple'
      type='single'
      collapsible
      className='w-full animate-in  duration-700 fade-in fade-out'
      defaultValue='item-1'
    >
      <AwardTable columns={AwardTableColumn} data={AwardData}></AwardTable>
      <ExhibitionsTable columns={DataTableColumn} data={ExhibitionData}></ExhibitionsTable>
      <PublicationsTable
        columns={PublicationTableColumn}
        data={PublicationData}
      ></PublicationsTable>

      <TalksTable columns={TalksTableColumn} data={TalkData}></TalksTable>
      <MediaTable columns={MediaTableColumn} data={MediaData}></MediaTable>
      <TeachingTable columns={TeachingTableColumn} data={TeachingData}></TeachingTable>
      <GrantsTable columns={GrantsTableColumn} data={GrantData}></GrantsTable>
    </Accordion>
  )
}
