export default function DoubleColumnPicture({ children }: { children: React.ReactNode }) {
  return (
    <div className='md:grid md:grid-cols-2 md:grid-rows-1 gap-4 grid-flow-row flex flex-col'>
      {children}
    </div>
  )
}
