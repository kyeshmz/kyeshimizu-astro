import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import ReactPlayer from 'react-player'

export default function VideoPlayer({ url }: { url: string }) {
  return (
    <AspectRatio ratio={16 / 9}>
      <ReactPlayer
        muted={true}
        url={url}
        playsinline
        width={'100%'}
        height={'100%'}
        config={{
          youtube: {
            playerVars: { showinfo: 1, autoplay: true, controls: true },
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
