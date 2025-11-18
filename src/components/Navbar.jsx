import { Menu } from "lucide-react";


export default function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between p-6 shadow-sm bg-white fixed top-0 left-0 z-50">
            <div className="text-2xl font-bold">TechConsult</div>
            <div className="hidden md:flex gap-8 text-lg">
                <a href="#services" className="hover:text-blue-600 transition">Services</a>
                <a href="#portfolio" className="hover:text-blue-600 transition">Portfolio</a>
                <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
            </div>
            <div className="md:hidden">
                <Menu />
            </div>
        </nav>
    );
}