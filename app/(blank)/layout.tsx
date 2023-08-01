export default function RootLayout ({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <main className='flex flex-col min-h-screen spacing grow'>
        {children}
    </main>
  )
}
