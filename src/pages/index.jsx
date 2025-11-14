export default function HomeLanding() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6"
        >
          Welcome to Our Platform
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg max-w-xl text-gray-600 mb-8"
        >
          Build, grow, and scale your applications with ease. Clean design, fast performance, and modern tooling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Button className="px-8 py-4 text-lg rounded-2xl shadow-lg">Get Started</Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 pb-24 max-w-6xl mx-auto w-full">
        {[
          {
            title: "Fast Setup",
            desc: "Get started instantly with modern, optimized defaults.",
          },
          {
            title: "Beautiful UI",
            desc: "Designed with a focus on clarity, space, and simplicity.",
          },
          {
            title: "Developer Friendly",
            desc: "Powered by industry-standard tools and best practices.",
          },
        ].map((feature, i) => (
          <Card key={i} className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-base">{feature.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t">© 2025 Your Company. All rights reserved.</footer>
    </div>
  );
}
