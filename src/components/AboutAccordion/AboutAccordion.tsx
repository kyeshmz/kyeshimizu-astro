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

export default function AboutAccordion({
  PublicationData,
  MediaData,
  ExhibitionData,
  TalkData,
  AwardData,
  TeachingData,
}: {
  PublicationData: PublicationTableRow[]
  MediaData: MediaTableRow[]
  ExhibitionData: ExhibitionTableRow[]
  TalkData: TalkTableRow[]
  AwardData: AwardTableRow[]
  TeachingData: TeachingTableRow[]
}) {
  return (
    <Accordion type='multiple' collapsible className='w-full' defaultValue={["item-1","item-2","item-3","item-4","item-5", "item-6"]}>
      <ExhibitionsTable columns={DataTableColumn} data={ExhibitionData}></ExhibitionsTable>
      <PublicationsTable
        columns={PublicationTableColumn}
        data={PublicationData}
      ></PublicationsTable>
      <AwardTable columns={AwardTableColumn} data={AwardData}></AwardTable>
      <TalksTable columns={TalksTableColumn} data={TalkData}></TalksTable>
      <MediaTable columns={MediaTableColumn} data={MediaData}></MediaTable>
      <TeachingTable columns={TeachingTableColumn} data={TeachingData}></TeachingTable>
    </Accordion>
  )
}
