

import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import Container from '@/components/layout/container'
import '@/styles/globals.css'

export const metadata = {
  title: 'Sorrisos :)',
  description: 'Busca de voos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-light">
        <Header/>
          <Container>
            {children}
          </Container>
        <Footer/>
      </body>
    </html>
  )
}
