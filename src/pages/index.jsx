export default function Home() {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-12">
      <div className="bg-white/90 rounded-3xl shadow-xl max-w-2xl w-full p-8 md:p-12 text-center">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">Welcome to WillQuickTech</h1>
        <p className="text-gray-700 text-lg mb-8">
          Your trusted partner for Linux, cloud, and cybersecurity solutions.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="/services" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow transition">Our Services</a>
          <a href="/contact" className="px-8 py-3 bg-white border border-indigo-400 text-indigo-600 font-semibold rounded-lg shadow hover:bg-indigo-50 transition">Contact Us</a>
        </div>
      </div>
    </main>
  );
}