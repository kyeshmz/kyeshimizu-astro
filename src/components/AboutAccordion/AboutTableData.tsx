import type { EmploymentTableRow, TeachingTableRow } from './AboutTableSchema'

// the data that is linked to the work is from the projects file and is not kept here
export const EmployeeTableData: Array<EmploymentTableRow> = [
  {
    employer: 'Sony Computer Science Laboratories',
    position: 'Visiting Researcher',
    fromYear: 'October 2020',
    endYear: 'Present',
    reference: 'https://sonycsl.com',
  },
  {
    employer: 'Nsketch Inc.',
    position: 'Co-founder & CEO',
    fromYear: 'March 2019',
    endYear: 'June 2020',
    reference: 'https://nsketch.com',
  },
  {
    employer: 'Synflux, LLC',
    position: 'Co-founder & CEO',
    fromYear: 'March 2019',
    endYear: 'June 2020',
    reference: 'https://synflux.io',
  },
  {
    employer: 'Keio Research Institute at SFC',
    position: 'Project Researcher',
    fromYear: 'April 2019',
    endYear: 'March 2020',
    reference: 'https://kris.com',
  },
  {
    employer: 'Rhizomatiks',
    position: 'Associate Researcher',
    fromYear: 'Dec. 2016',
    endYear: 'Dec. 2019',
    reference: 'https://rhizomatiks.com',
  },
]

export const TeachingTableData: TeachingTableRow[] = [
  {
    workshop_name: 'TA for Data Driven Art Summer School with Yasuaki Kakehi, Daito Manabe',
    place: 'Keio University SFC',
    date: '2018',
  },
  {
    workshop_name: 'TA for Data Driven Art Summer School with Yasuaki Kakehi, Daito Manabe',
    place: 'Keio University SFC',
    date: '2017',
  },
  {
    workshop_name: 'TA for Moving Picture with Saito Tatsuya',
    place: 'Keio University SFC',
    date: '2018',
  },
]
