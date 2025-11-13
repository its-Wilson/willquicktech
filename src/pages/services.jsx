export default function Services() {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-12">
      <div className="bg-white/90 rounded-3xl shadow-xl max-w-2xl w-full p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">Our Services</h1>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>Linux &amp; Cloud Consulting</li>
          <li>Cybersecurity Audits</li>
          <li>DevOps &amp; Automation</li>
          <li>Custom Software Solutions</li>
        </ul>
      </div>
    </main>
  );
}