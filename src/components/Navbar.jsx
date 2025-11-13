import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white/90 backdrop-blur border-b border-gray-200 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          WillQuickTech
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/about" className="text-gray-700 hover:text-indigo-600 font-medium">About</Link>
          <Link href="/services" className="text-gray-700 hover:text-indigo-600 font-medium">Services</Link>
          <Link href="/portfolio" className="text-gray-700 hover:text-indigo-600 font-medium">Portfolio</Link>
          <Link href="/blog" className="text-gray-700 hover:text-indigo-600 font-medium">Blog</Link>
          <Link href="/contact" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</Link>
        </div>
      </div>
    </nav>
  );
}