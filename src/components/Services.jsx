import { Card, CardContent } from "@/components/ui/card";


export default function Services() {
    const services = [
        {
            title: "Cloud Architecture",
            description: "Build secure and scalable cloud environments tailored to your workloads.",
        },
        {
            title: "Security Consulting",
            description: "Comprehensive vulnerability, compliance, and security posture management.",
        },
        {
            title: "Systems Integration",
            description: "Modernize your stack with seamless integration of new and legacy systems.",
        },
    ];


    return (
        <section id="services" className="py-24 px-6 bg-white">
            <h2 className="text-4xl font-bold text-center mb-12">Services</h2>
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {services.map((s, i) => (
                    <Card key={i} className="rounded-2xl shadow-md p-6">
                        <CardContent>
                            <h3 className="text-2xl font-semibold mb-4">{s.title}</h3>
                            <p className="text-gray-600">{s.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}