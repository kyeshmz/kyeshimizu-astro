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

import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import type { DataTableProps } from '../../types/table'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { DataTableColumnHeader } from './DataTableColumnHeader'

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
    // header: ({ column }) => <DownloadColumnHeader column={column} title='Year' />,
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
    <AccordionItem value='item-3'>
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
