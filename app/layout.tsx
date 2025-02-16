import { Metadata } from 'next'
import Link from 'next/link'
import { ReactNode } from 'react'
import { FaRegClock, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa'
import DoubleASPLogo from '@/public/logo/double-a-s-p.png'
import './globals.css'

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
      <body>
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
    <header className="bg-primary flex h-12 items-center gap-8 px-4">
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
      <div className="ml-[300px] flex h-full w-full max-w-[800px] items-center justify-between px-4">
        <Link href="/">HOME</Link>
        <Link href="/products">PRODUCTS</Link>
        <Link href="/projects">PROJECTS</Link>
        <Link href="/about">ABOUT US</Link>
        <Link href="/contact">CONTACT US</Link>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-bluegray flex h-96 items-center justify-center gap-32">
      <div>
        <h1 className="text-primary text-2xl font-bold">Contact Information</h1>
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
