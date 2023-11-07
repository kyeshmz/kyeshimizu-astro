import { Image } from 'astro:assets'
import clsx from 'clsx'
export default function ProjectHoverImage({ isVisible, src }: { isVisible: boolean, src: string }) {
  //TODO: we need to populate the images from the front matter or something
  return (
    <div className={clsx('float-right h-auto w-100 max-w-lg', isVisible ? 'visible' : 'hidden')}>
      <img src={src}></img>
    </div>
  )
}
