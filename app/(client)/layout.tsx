import { Metadata } from 'next'
import Link from 'next/link'
import { ReactNode } from 'react'
import { FaRegClock, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa'
import DoubleASPLogo from '@/public/logo/double-a-s-p.png'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Root',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-[Mitr]">
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="flex h-12 items-center gap-8 bg-primary px-4">
      <div className="flex items-center gap-4">
        <FaRegEnvelope />
        <SmallText>test@email.com</SmallText>
      </div>
      <div className="flex items-center gap-4">
        <FaPhoneAlt />
        <SmallText>081-234-5678</SmallText>
      </div>
      <div className="flex items-center gap-4">
        <FaRegClock />
        <SmallText>Mon - Fri: 9:00 - 18:00</SmallText>
      </div>
    </header>
  )
}

function Navbar() {
  return (
    <div className="flex h-20 w-full items-center shadow-md">
      <img src={DoubleASPLogo.src} alt="Double-A-SP Logo" className="ml-12 h-full w-auto py-2" />
      <div className="mx-auto flex h-full w-full max-w-[800px] items-center justify-between text-xl">
        <Link href="/">HOME</Link>
        <Link href="/products">PRODUCTS</Link>
        <Link href="/projects">PROJECTS</Link>
        <Link href="/about-us">ABOUT US</Link>
        <Link href="/contact-us">CONTACT US</Link>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="flex h-96 items-center justify-center gap-32 bg-bluegray">
      <div>
        <h1 className="text-3xl text-primary">Contact Information</h1>
        <br />
        <p>Phone: 081-234-5678</p>
        <p>Email: test@email.com</p>
        <p>Office Hours: Mon - Fri 9:00 - 18:00</p>
      </div>
      <div className="flex h-40 w-80 items-center justify-center bg-white">
        <p>Map</p>
      </div>
    </footer>
  )
}

function SmallText({ children }: { children: ReactNode }) {
  return <p className="text-sm text-white">{children}</p>
}
