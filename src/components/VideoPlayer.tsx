import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import ReactPlayer from 'react-player'

export default function VideoPlayer({ url }: { url: string }) {
  return (
    <AspectRatio ratio={16 / 9}>
      <ReactPlayer
        url={url}
        width={'100%'}
        height={'100%'}
        config={{
          file: {
            attributes: {
              autoPlay: true,
              muted: true,
              loop: true,
            },
          },
          youtube: {
            playerVars: { showinfo: 1, autoplay: true, controls: true, muted: true },
          },
          vimeo: {
            playerOptions: {
              controls: true,
              autoplay: true,
            },
          },
        }}
      />
    </AspectRatio>
  )
}
