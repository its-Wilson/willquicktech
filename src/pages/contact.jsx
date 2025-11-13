export default function Contact() {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-12">
      <div className="bg-white/90 rounded-3xl shadow-xl max-w-2xl w-full p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">Contact Us</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Name</label>
            <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" type="text" id="name" name="name" required />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Email</label>
            <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" type="email" id="email" name="email" required />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="message">Message</label>
            <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition">Send Message</button>
        </form>
      </div>
    </main>
  );
}