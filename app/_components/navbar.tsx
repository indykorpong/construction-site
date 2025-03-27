import Image from 'next/image'
import Link from 'next/link'

import DoubleASPLogo from '@/public/logo/double-a-s-p.png'

export function Navbar() {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center px-2">
        <Image src={DoubleASPLogo.src} alt="Double-A-SP Logo" className="h-full w-auto py-2" width={100} height={100} />
        <div className="mx-auto flex h-full w-full max-w-[800px] items-center justify-between text-xl font-semibold">
          <Link href="/">HOME</Link>
          <Link href="/products">PRODUCTS</Link>
          <Link href="/projects">PROJECTS</Link>
          <Link href="/about-us">ABOUT US</Link>
          <Link href="/contact-us">CONTACT US</Link>
        </div>
      </div>
    </div>
  )
}
