export const metadata = {
  title: 'ARAN - Business & Trade Logo',
  description: 'Professional logo design for ARAN with business and trade theme',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
