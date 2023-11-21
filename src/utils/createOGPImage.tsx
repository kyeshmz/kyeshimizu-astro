import { Resvg } from '@resvg/resvg-js'
import satori from 'satori'

const SITE_TITLE = 'Kye Shimizu'
const siteDomainName = 'kyeshimizu.com'
const fontFamily = 'Inter'

export async function getOgImage(text: string) {
  const fontNormal = await fetchFont(SITE_TITLE + siteDomainName, fontFamily, 600)
  const fontBold = await fetchFont(SITE_TITLE + text, fontFamily, 700)

  const svg = await satori(
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        letterSpacing: '-.02em',
        fontWeight: 700,
        background: 'white',
      }}
    >
      <div
        style={{
          left: 42,
          top: 42,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            width: 24,
            height: 24,
            background: 'black',
          }}
        />
        <span
          style={{
            marginLeft: 8,
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          kyeshimizu.com
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '20px 50px',
          margin: '0 42px',
          fontSize: 40,
          width: 'auto',
          maxWidth: 550,
          textAlign: 'center',
          backgroundColor: 'black',
          color: 'white',
          lineHeight: 1.4,
        }}
      >
        {text}
      </div>
    </div>,
    {
      width: 800,
      height: 400,
      embedFont: true,
      fonts: [
        {
          name: fontFamily,
          data: fontNormal,
          weight: 600,
          style: 'normal',
        },
        {
          name: fontFamily,
          data: fontBold,
          weight: 700,
          style: 'normal',
        },
      ],
    },
  )

  const resvg = new Resvg(svg)

  return resvg.render().asPng()
}

async function fetchFont(text: string, font: string, weight: number): Promise<ArrayBuffer> {
  const API = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&text=${encodeURIComponent(
    text,
  )}`

  const css = await (
    await fetch(API, {
      headers: {
        // Make sure it returns TTF.
        'User-Agent':
          'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1',
      },
    })
  ).text()

  const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/)

  if (!resource) {
    throw new Error('Failed to fetch font')
  }

  const res = await fetch(resource[1])

  return res.arrayBuffer()
}
