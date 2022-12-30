export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const header = (
    <header>
      <div>
        <h1>
          New Blog
        </h1>
        <p>Welcome to tech blog.</p>
      </div>
    </header>
  )


  return (
    <html>
      <head />
      <body>
        {header}
        {children}
        </body>
    </html>
  )
}
