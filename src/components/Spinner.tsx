import clsx from 'clsx'
import { Loader2 } from 'lucide-react'
import type { ComponentPropsWithoutRef } from 'react'

export default function Spinner({ ...props }: ComponentPropsWithoutRef<'svg'>) {
  return <Loader2 className={clsx('h-4 w-4 animate-spin', props.className)} {...props} />
}
