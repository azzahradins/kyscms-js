import Header from '../../templates/header'

export default function RootLayout ({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <main className='flex flex-col min-h-screen bg-prplBG dark:bg-prplDBG'>
      <Header/>
      <section className='spacing grow'>
        {children}
      </section>
    </main>
  )
}
