export default function Home() {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-12 bg-gradient-to-br from-blue-50 via-purple-50 to-white">
      <div className="bg-white/90 rounded-3xl shadow-xl max-w-2xl w-full p-8 md:p-12 text-center">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">
          Welcome to WillQuickTech LLC
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          WillQuickTech LLC provides expert IT consulting services for businesses of all sizes.
          We specialize in cloud solutions, cybersecurity, DevOps, and custom software development.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          <a
            href="/services"
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow transition"
          >
            Our Services
          </a>
          <a
            href="/contact"
            className="px-8 py-3 bg-white border border-indigo-400 text-indigo-600 font-semibold rounded-lg shadow hover:bg-indigo-50 transition"
          >
            Contact Us
          </a>
        </div>
        <div className="text-left mt-6">
          <h2 className="text-xl font-bold text-indigo-600 mb-2">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Experienced IT professionals</li>
            <li>Tailored solutions for your business</li>
            <li>Proactive cybersecurity strategies</li>
            <li>Cloud migration & management</li>
            <li>Responsive support & consulting</li>
          </ul>
        </div>
      </div>
    </main>
  );
}