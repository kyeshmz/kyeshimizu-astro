import { useStore } from '@nanostores/react'
import clsx from 'clsx'

import { $projectHoverImageAtom } from '../../state/ProjectHoverState'

export default function ProjectHoverImage({
  src,
  children,
}: {
  src: string
  children: React.ReactNode
}) {
  //@ts-ignore
  const hoverImage = useStore($projectHoverImageAtom)
  //TODO: we need to populate the images from the front matter or something
  return (
    <div
      className={clsx(
        'float-right h-auto w-100 max-w-lg z-50',
        // 'visible',
        hoverImage === src ? 'visible' : 'hidden',
      )}
    >
      {children}
    </div>
  )
}
