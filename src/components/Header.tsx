// src/components/Header.tsx
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center h-16 px-4">
        <Link href="/" className="flex-none text-xl font-bold text-gray-900 hover:text-gray-700">
          Professional projects
        </Link>
        <div className="flex-1" />
        <nav className="flex">
          <Link href="/about" className="mr-6 text-gray-700 hover:text-gray-900">About</Link>
          <Link href="/services" className="mr-6 text-gray-700 hover:text-gray-900">Services</Link>
          <Link href="/howiwork" className="mr-6 text-gray-700 hover:text-gray-900">How I work</Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
