export default function TripleColumnPicture({ children }: { children: React.ReactNode }) {
  return (
    <div className='md:grid md:grid-cols-3 md:grid-rows-1 gap-4 grid-flow-row flex flex-col justify-center place-items-center'>
      {children}
    </div>
  )
}
