import { Card, CardContent } from "@/components/ui/card";


export default function Portfolio() {
    const items = [
        { title: "Cloud Migration", details: "AWS multi-account secure migration." },
        { title: "Zero Trust Rollout", details: "Enterprise-wide security modernization." },
        { title: "DevOps Automation", details: "CI/CD pipelines & infra-as-code." },
    ];


    return (
        <section id="portfolio" className="py-24 px-6 bg-gray-50">
            <h2 className="text-4xl font-bold text-center mb-12">Portfolio</h2>
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {items.map((p, i) => (
                    <Card key={i} className="rounded-2xl shadow-md p-6">
                        <CardContent>
                            <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
                            <p className="text-gray-600">{p.details}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}