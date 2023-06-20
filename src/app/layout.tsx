import Chat from '@/app/components/Chat'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/app/components/Providers'
import ToasterContext from '@/context/ToasterContext'
import AuthContext from '@/context/AuthContext'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Habeas Codeus',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <Providers>
        <body className={inter.className}>
          <AuthContext>
            <ToasterContext />
            {children}
          </AuthContext>
        </body>
      </Providers>
    </html>
  )
}