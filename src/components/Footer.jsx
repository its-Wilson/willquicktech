export default function Footer() {
  return (
    <footer className="bg-white/80 border-t border-gray-200 text-center py-6 text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} WillQuickTech. Crafted with <span className="text-pink-400">♥</span> using Tailwind CSS.
    </footer>
  );
}