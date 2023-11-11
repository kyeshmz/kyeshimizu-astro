import { AccordionContent, AccordionItem, AccordionTrigger } from '@/src/components/ui/accordion'

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/src/components/ui/table'
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@radix-ui/react-hover-card'
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from '@tanstack/react-table'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import type { DataTableProps } from '../../types/table'
import { DataTableColumnHeader } from './DataTableColumnHeader'

export type PublicationTableRow = {
  work?: string
  conference_name: string
  reference: string
  year: number
}

export const PublicationTableColumn: ColumnDef<PublicationTableRow>[] = [
  {
    accessorKey: 'work',
    header: 'Work',
  },
  {
    accessorKey: 'conference_name',
    header: 'Conference Name',
  },
  {
    accessorKey: 'reference',
    header: 'Reference',
  },
  {
    accessorKey: 'year',
    // header: 'Year',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Year' />,
  },
]

export default function PublicationsTable<TData, TValue>({
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
    <AccordionItem value='item-2'>
      <AccordionTrigger>Publications / Symposiums</AccordionTrigger>
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
                  {row.getVisibleCells().map((cell) => (
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
                  ))}
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