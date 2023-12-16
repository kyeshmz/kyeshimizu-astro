import { Accordion } from '@/src/components/ui/accordion'
import CommonTable from './CommonTable'
import {
  type PublicationTableRow,
  type MediaTableRow,
  type ExhibitionTableRow,
  type TalkTableRow,
  type AwardTableRow,
  type TeachingTableRow,
  type GrantTableRow,
  AwardTableColumn,
  ExhibitionTableColumn,
  PublicationTableColumn,
  TalksTableColumn,
  MediaTableColumn,
  TeachingTableColumn,
  GrantsTableColumn,
  EmploymentTableColumn,
} from './AboutTableSchema'
import { EmployeeTableData } from './AboutTableData'

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
      defaultValue='i1'
    >
      <CommonTable itemValue='i1' tableName='Awards' columns={AwardTableColumn} data={AwardData} />
      <CommonTable
        itemValue='i2'
        tableName='Employment'
        columns={EmploymentTableColumn}
        data={EmployeeTableData}
      />

      <CommonTable
        itemValue='i3'
        tableName='Exhibitions'
        columns={ExhibitionTableColumn}
        data={ExhibitionData}
      />
      <CommonTable
        itemValue='i4'
        tableName='Publications / Conferences'
        columns={PublicationTableColumn}
        data={PublicationData}
      />

      <CommonTable itemValue='i5' tableName='Talks' columns={TalksTableColumn} data={TalkData} />
      <CommonTable itemValue='i6' tableName='Media' columns={MediaTableColumn} data={MediaData} />
      <CommonTable
        itemValue='i7'
        tableName='Teaching Experience'
        columns={TeachingTableColumn}
        data={TeachingData}
      />
      <CommonTable
        itemValue='i8'
        tableName='Participating Grants'
        columns={GrantsTableColumn}
        data={GrantData}
      />
    </Accordion>
  )
}
