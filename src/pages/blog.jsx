export default function Blog() {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-12">
      <div className="bg-white/90 rounded-3xl shadow-xl max-w-2xl w-full p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">Blog</h1>
        <p className="text-gray-700 text-lg mb-6">
          Insights, tutorials, and updates from WillQuickTech.
        </p>
        {/* Add blog posts here */}
      </div>
    </main>
  );
}