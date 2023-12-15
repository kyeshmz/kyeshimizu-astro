import type { ColumnDef } from '@tanstack/react-table'
import { ArrowUpRight, MoreHorizontal } from 'lucide-react'
import { Button } from '../ui/button'
import { AlphabeticalColumnHeader } from './AlphabeticalColumnHeader'
import { DataTableColumnHeader } from './DataTableColumnHeader'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

export type TalkTableRow = {
  talk_name: string
  reference: string
  city: string
  place: string
  year: number
  event_name: string
}

export const TalksTableColumn: ColumnDef<TalkTableRow>[] = [
  {
    accessorKey: 'work',
    header: ({ column }) => <AlphabeticalColumnHeader column={column} title='Work' />,
  },
  {
    accessorKey: 'talk_name',

    header: ({ column }) => <AlphabeticalColumnHeader column={column} title='Talk' />,
  },
  {
    accessorKey: 'event_name',

    header: ({ column }) => <AlphabeticalColumnHeader column={column} title='Event Name' />,
  },
  {
    accessorKey: 'place',

    header: ({ column }) => <AlphabeticalColumnHeader column={column} title='Place' />,
  },
  {
    accessorKey: 'city',

    header: ({ column }) => <AlphabeticalColumnHeader column={column} title='City' />,
  },

  {
    accessorKey: 'year',
    // header: 'Year',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Year' />,
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const publicationRow = row.original

      return (
        <Button variant={'ghost'} asChild>
          <a href={publicationRow.reference} className='flex gap-2'>
            <ArrowUpRight className='w-4 h-4' />
          </a>
        </Button>
      )
    },
  },
]

export type TeachingTableRow = {
  work?: string
  workshop_name: string
  place: string
  date: string
}

export const TeachingTableColumn: ColumnDef<TeachingTableRow>[] = [
  {
    accessorKey: 'workshop_name',
    header: ({ column }) => <AlphabeticalColumnHeader column={column} title='Workshop Name' />,
  },
  {
    accessorKey: 'place',

    header: ({ column }) => <AlphabeticalColumnHeader column={column} title='Place' />,
  },
  {
    accessorKey: 'date',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Date' />,
  },
]

export const TeachingExperienceData = []

export type PublicationTableRow = {
  work?: string
  url: string
  conference_name: string
  reference: string
  year: number
  pdf_path: string
}

export const PublicationTableColumn: ColumnDef<PublicationTableRow>[] = [
  {
    accessorKey: 'work',
    header: ({ column }) => <AlphabeticalColumnHeader column={column} title='Work' />,
  },
  {
    accessorKey: 'conference_name',
    header: ({ column }) => <AlphabeticalColumnHeader column={column} title='Conference' />,
  },
  {
    accessorKey: 'reference',
    header: ({ column }) => <AlphabeticalColumnHeader column={column} title='Reference' />,
  },
  {
    accessorKey: 'year',
    // header: 'Year',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Year' />,
  },

  {
    id: 'actions',
    cell: ({ row }) => {
      const publicationRow = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            {publicationRow.pdf_path && (
              <DropdownMenuItem>
                <a href={publicationRow.pdf_path}>View paper</a>
              </DropdownMenuItem>
            )}

            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <a href={publicationRow.url}>Go to Reference</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export type MediaTableRow = {
  media_name: string

  reference: string
  year: number
}

export const MediaTableColumn: ColumnDef<MediaTableRow>[] = [
  {
    accessorKey: 'work',
    header: ({ column }) => <AlphabeticalColumnHeader column={column} title='Work' />,
  },
  {
    accessorKey: 'media_name',

    header: ({ column }) => <AlphabeticalColumnHeader column={column} title='Media Name' />,
  },
  {
    accessorKey: 'medium',

    header: ({ column }) => <AlphabeticalColumnHeader column={column} title='Medium' />,
  },

  {
    accessorKey: 'year',
    // header: 'Year',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Year' />,
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const publicationRow = row.original

      return (
        <Button variant={'ghost'} asChild>
          <a href={publicationRow.reference} className='flex gap-2'>
            <ArrowUpRight className='w-4 h-4' />
          </a>
        </Button>
      )
    },
  },
]

export type GrantTableRow = {
  work?: string
  grant_name: string
  reference: string
  year: number
}

export const GrantsTableColumn: ColumnDef<GrantTableRow>[] = [
  {
    accessorKey: 'work',
    header: ({ column }) => <AlphabeticalColumnHeader column={column} title='Work' />,
  },
  {
    accessorKey: 'grant_name',

    header: ({ column }) => <AlphabeticalColumnHeader column={column} title='Grant Name' />,
  },

  {
    accessorKey: 'year',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Year' />,
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const publicationRow = row.original

      return (
        <Button variant={'ghost'} asChild>
          <a href={publicationRow.reference} className='flex gap-2'>
            <ArrowUpRight className='w-4 h-4' />
          </a>
        </Button>
      )
    },
  },
]

export type ExhibitionTableRow = {
  work: string
  exhibition_name: string
  city: string
  place: string
  date: string
}

export const ExhibitionTableColumn: ColumnDef<ExhibitionTableRow>[] = [
  {
    accessorKey: 'work',

    header: ({ column }) => <AlphabeticalColumnHeader column={column} title='Work' />,
  },
  {
    accessorKey: 'exhibition_name',

    header: ({ column }) => <AlphabeticalColumnHeader column={column} title='Exhibition Name' />,
  },
  {
    accessorKey: 'city',
    header: ({ column }) => <AlphabeticalColumnHeader column={column} title='City, Country' />,
  },
  {
    accessorKey: 'place',
    header: ({ column }) => <AlphabeticalColumnHeader column={column} title='Place' />,
  },
  {
    accessorKey: 'date',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Date' />,
  },
]

export type AwardTableRow = {
  work: string
  award_name: string
  year: number
}

export const AwardTableColumn: ColumnDef<AwardTableRow>[] = [
  {
    accessorKey: 'work',
    header: ({ column }) => <AlphabeticalColumnHeader column={column} title='Work' />,
  },
  {
    accessorKey: 'award_name',
    // header: 'Award Name',
    header: ({ column }) => <AlphabeticalColumnHeader column={column} title='Award Name' />,
  },
  {
    accessorKey: 'year',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Year' />,
  },
]

// Keio Research Institute at SFC
export type EmploymentTableRow = {
  employer: string
  position: string
  year: number
}

export const EmploymentTableColumn: ColumnDef<EmploymentTableRow>[] = [
  {
    accessorKey: 'employer',
    header: ({ column }) => <AlphabeticalColumnHeader column={column} title='Employer' />,
  },
  {
    accessorKey: 'position',
    header: ({ column }) => <AlphabeticalColumnHeader column={column} title='Position' />,
  },
  {
    accessorKey: 'year',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Year' />,
  },
]
