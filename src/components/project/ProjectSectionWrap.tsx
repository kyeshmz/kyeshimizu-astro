import type { ReactNode } from 'react'

export default function ProjectSectionWrap({ children }: { children: ReactNode }) {
  return <section className={'pt-3 w-full'}>{children}</section>
}
