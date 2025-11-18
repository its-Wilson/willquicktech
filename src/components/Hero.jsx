"use client";


import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";


export default function Hero() {
    return (
        <section className="pt-32 pb-24 px-6 text-center bg-gray-50">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold mb-6"
            >
                IT Consulting for Modern Businesses
            </motion.h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 mb-8">
                Secure, scalable, and innovative solutions tailored to your company's goals.
            </p>
            <Button size="lg" className="rounded-2xl px-8 py-6 text-lg">Get Started</Button>
        </section>
    );
}