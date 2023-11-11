import { useStore } from '@nanostores/react'
import { $projectHoverImageAtom } from '@/src/state/ProjectHoverState'
import ProjectHoverImage from './ProjectHoverImage'
import { Works } from '../types/works'

export default function ProjectHoverImages() {
  //TODO: we need to populate the images from the front matter or something
  const hoverImage = useStore($projectHoverImageAtom)
  return (
    <div>
      <ProjectHoverImage
        src='https://public-library.org/wp-content/uploads/2023/08/Screenshot-2023-05-09-at-9.53.17-AM.png'
        isVisible={hoverImage === Works.RhizomatiksFencing}
      ></ProjectHoverImage>
      <ProjectHoverImage
        src='https://public-library.org/wp-content/uploads/2023/03/Scan.jpeg'
        isVisible={hoverImage === Works.Synflux}
      ></ProjectHoverImage>
    </div>
  )
}
