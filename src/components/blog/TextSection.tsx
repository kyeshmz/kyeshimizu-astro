import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

export default function TextSection({
  children,
  ...props
}: { children: React.ReactNode } & ComponentPropsWithoutRef<'div'>) {
  return (
    <section className={clsx('max-w-2xl w-full flex flex-col  mx-auto ', props.className)}>
      {children}
    </section>
  )
}
