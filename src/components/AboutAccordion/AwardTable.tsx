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

export type AwardTableRow = {
  work: string
  award_name: string
  year: number
}

export const AwardTableColumn: ColumnDef<AwardTableRow>[] = [
  {
    accessorKey: 'work',
    header: 'Work',
  },
  {
    accessorKey: 'award_name',
    header: 'Award Name',
  },
  {
    accessorKey: 'year',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Year' />,
  },
]

export default function AwardTable<TData, TValue>({
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
    <AccordionItem value='item-1'>
      <AccordionTrigger>Awards</AccordionTrigger>
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
                            href={String(row.getVisibleCells()[0].getValue())
                              .toLocaleLowerCase()
                              .replace(/ /g, '-')}
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
