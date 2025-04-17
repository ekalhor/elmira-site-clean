export const metadata = {
  title: 'Elmira Kalhor',
  description: 'Personal site of Elmira Kalhor',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
