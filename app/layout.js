import './globals.css'

import LicodeNavbar from '@/components/navbar'
import LicodeFooter from '@/components/footer'

export const metadata = {
  title: 'licode',
  description: 'Dev for the future',
}

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
    <body className="font-[sfprorounded]">
      <LicodeNavbar />

      <br/><br/><br/>
      <div className="">
        {children}
      </div>
      <br/><br/><br/>
      
      <LicodeFooter />
    </body>
    </html>
  )
}
