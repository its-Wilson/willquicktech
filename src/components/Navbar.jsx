import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white/90 backdrop-blur border-b border-gray-200 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-indigo-600">WillQuickTech LLC</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-indigo-600 font-medium transition">Home</Link>
          <Link href="/services" className="text-gray-700 hover:text-indigo-600 font-medium transition">Services</Link>
          <Link href="/about" className="text-gray-700 hover:text-indigo-600 font-medium transition">About</Link>
          <Link href="/blog" className="text-gray-700 hover:text-indigo-600 font-medium transition">Blog</Link>
          <Link href="/contact" className="text-white bg-indigo-600 hover:bg-indigo-700 font-medium px-4 py-2 rounded-lg shadow transition">Contact</Link>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          {/* You can add a mobile menu button and drawer here if desired */}
        </div>
      </div>
    </nav>
  );
}