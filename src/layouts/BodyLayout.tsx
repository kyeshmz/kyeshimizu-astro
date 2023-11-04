import type { ReactNode } from 'preact/compat'
import Sidebar from '../components/SideBar'

export default function BodyLayout({ children }: { children: ReactNode }) {
  return <div class={'py-6 w-15 mx-6  md:mx-28 my-0'}>{children}</div>
}
