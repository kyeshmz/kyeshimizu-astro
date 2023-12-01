import { useRef, useEffect } from 'react'

export default function TwitterEmbed({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null) // コンポーネントのルートとなる要素を取得

  useEffect(() => {
    //@ts-ignore
    twttr.widgets.load(containerRef.current) // ツイートの埋め込みを実行
  }, [])

  return (
    <div ref={containerRef}>
      <blockquote className='twitter-tweet'>{children}</blockquote>
    </div>
  )
}
