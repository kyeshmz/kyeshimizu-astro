import type { ReactNode } from 'preact/compat'

export default function ProjectSectionWrap({ children }: { children: ReactNode }) {
  return <section className={'pt-3 w-full'}>{children}</section>
}
