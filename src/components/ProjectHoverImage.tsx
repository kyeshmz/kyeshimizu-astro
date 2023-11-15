import { useStore } from '@nanostores/react'
import { Image } from 'astro:assets'
import clsx from 'clsx'
import { $projectHoverImageAtom } from '../state/ProjectHoverState'

export default function ProjectHoverImage({ src }: { src: string }) {
  //@ts-ignore
  const hoverImage = useStore($projectHoverImageAtom)
  //TODO: we need to populate the images from the front matter or something
  return (
    <div
      className={clsx(
        'float-right h-auto w-100 max-w-lg',
        hoverImage === src ? 'visible' : 'hidden',
      )}
    >
      <img src={src}></img>
    </div>
  )
}
