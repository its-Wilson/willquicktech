import { Button } from "@/components/ui/button";


export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 bg-white">
            <h2 className="text-4xl font-bold text-center mb-8">Contact</h2>
            <div className="max-w-xl mx-auto text-center">
                <p className="text-lg text-gray-600 mb-6">
                    Ready to elevate your technology strategy? Reach out and let's talk.
                </p>
                <form className="grid gap-4 text-left">
                    <input type="text" placeholder="Your Name" className="border p-4 rounded-xl" />
                    <input type="email" placeholder="Your Email" className="border p-4 rounded-xl" />
                    <textarea placeholder="Your Message" rows="4" className="border p-4 rounded-xl"></textarea>
                    <Button className="rounded-2xl py-6 text-lg">Send Message</Button>
                </form>
            </div>
        </section>
    );
}