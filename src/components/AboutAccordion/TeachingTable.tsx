import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/src/components/ui/table'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/src/components/ui/hover-card'
import { AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

import {
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
  flexRender,
  getSortedRowModel,
  type SortingState,
} from '@tanstack/react-table'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { DataTableColumnHeader } from './DataTableColumnHeader'
import type { DataTableProps } from '../../types/table'

export type TeachingTableRow = {
  work?: string
  workshop_name: string
  place: string
  date: string
}

export const TeachingTableColumn: ColumnDef<TeachingTableRow>[] = [
  {
    accessorKey: 'workshop_name',
    header: 'Workshop Name',
  },
  {
    accessorKey: 'place',
    header: 'Place',
  },
  {
    accessorKey: 'date',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Date' />,
  },
]

export default function TeachingTable<TData, TValue>({
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
    <AccordionItem value='item-6'>
      <AccordionTrigger>Teaching / Workshops</AccordionTrigger>
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
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
