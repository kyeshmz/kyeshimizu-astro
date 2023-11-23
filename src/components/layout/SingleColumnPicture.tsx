export default function SingleColumnPicture({ children }: { children: React.ReactNode }) {
    return (
      <div className='md:grid md:grid-cols-1 md:grid-rows-1 gap-4 grid-flow-row flex flex-col justify-center items-center'>
        {children}
      </div>
    )
  }
  