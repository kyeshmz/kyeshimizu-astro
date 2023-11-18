import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { Suspense } from 'react'
import ReactPlayer from 'react-player'
import Spinner from './Spinner'

export default function VideoPlayer({ url }: { url: string }) {
  return (
    <Suspense
      fallback={
        <AspectRatio ratio={16 / 9}>
          <div className='w-full h-full relative flex flex-col justify-center items-center'>
            <Spinner></Spinner>
          </div>
        </AspectRatio>
      }
    >
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
    </Suspense>
  )
}
