
export const metadata ={
  title: 'Task-Master',
  description: 'David Rubio León'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
