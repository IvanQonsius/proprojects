// src/components/Footer.tsx
import Link from "next/link"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <span className="text-sm text-gray-500">
          © {year} Ivan Rubio Proffessional Projects. All rights reserved.
        </span>
        <nav className="mt-4 sm:mt-0">
          <ul className="flex space-x-6 m-0 p-0 list-none">
            <li><Link href="/about" className="text-gray-600 hover:text-gray-800 text-sm">About</Link></li>
            <li><Link href="/services" className="text-gray-600 hover:text-gray-800 text-sm">Services</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-gray-800 text-sm">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
