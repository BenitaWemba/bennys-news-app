
import '../globals.css';

export const metadata = {
  title: 'BBNews',
  description: 'Learn how to route to different pages.',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
         {children}
          </body>
    </html>
  )
}
