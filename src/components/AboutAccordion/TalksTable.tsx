import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from '@tanstack/react-table'
import { ArrowUpRight, MoreHorizontal } from 'lucide-react'
import { useState } from 'react'

import { DataTableColumnHeader } from '@/src/components/AboutAccordion/DataTableColumnHeader'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/src/components/ui/accordion'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/src/components/ui/hover-card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/src/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import type { DataTableProps } from '../../types/table'
import { Button } from '../ui/button'
import { AlphabeticalColumnHeader } from './AlphabeticalColumnHeader'

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
            <ArrowUpRight className='w-4 h-4'></ArrowUpRight>
          </a>
        </Button>
      )
    },
  },
]

export default function TalksTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  })

  return (
    <AccordionItem value='item-4'>
      <AccordionTrigger>Talks</AccordionTrigger>
      <AccordionContent>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell) =>
                    // TODO: cancel out the hover card for the last cell in the row
                    cell.column.id != 'actions' ? (
                      <TableCell key={cell.id}>
                        <HoverCard key={row.id}>
                          <HoverCardTrigger key={row.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </HoverCardTrigger>
                          <HoverCardContent className='w-80' key={row.getVisibleCells()[0].id}>
                            <a
                              href={
                                '/projects/' +
                                String(row.getVisibleCells()[0].getValue())
                                  .toLocaleLowerCase()
                                  .replace(/ /g, '-')
                              }
                            >
                              <div className='flex justify-between items-center'>
                                <h4 className='text-sm font-semibold'>
                                  {String(row.getVisibleCells()[0].getValue())}
                                </h4>
                                <ArrowUpRight className='h-4 w-4' />
                              </div>

                              <p className='text-sm'>Click to know more about the project</p>
                            </a>
                          </HoverCardContent>
                        </HoverCard>
                      </TableCell>
                    ) : (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ),
                  )}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className='h-24 text-center'>
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </AccordionContent>
    </AccordionItem>
  )
}
