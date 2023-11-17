export default function TextSection({ children }: { children: React.ReactNode }) {
  return (
    <section className='max-w-2xl w-full flex flex-col justify-center items-center mx-auto gap-4'>
      {children}
    </section>
  )
}
