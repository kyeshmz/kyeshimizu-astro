import { DataTableColumn } from '@/src/components/AboutAccordion/ExhibitionsTable'
import { GrantsTableColumn } from '@/src/components/AboutAccordion/GrantsTable'
import { TeachingTableColumn } from '@/src/components/AboutAccordion/TeachingTable'

import { Accordion } from '../ui/accordion'
import AwardTable, { AwardTableColumn, type AwardTableRow } from './AwardTable'
import ExhibitionsTable, { type ExhibitionTableRow } from './ExhibitionsTable'
import GrantsTable, { type GrantTableRow } from './GrantsTable'
import MediaTable, { MediaTableColumn, type MediaTableRow } from './MediaTable'
import PublicationsTable, {
  PublicationTableColumn,
  type PublicationTableRow,
} from './PublicationsTable'
import TalksTable, { TalksTableColumn, type TalkTableRow } from './TalksTable'
import TeachingTable, { type TeachingTableRow } from './TeachingTable'

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
