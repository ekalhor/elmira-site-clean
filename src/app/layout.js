import './globals.css';

export const metadata = {
  title: 'Elmira Kalhor',
  description: 'Elmira Kalhor’s personal site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-800">
        {children}
      </body>
    </html>
  )
}
