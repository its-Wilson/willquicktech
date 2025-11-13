import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white/90 backdrop-blur border-b border-gray-200 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        <NavLink to="/" className="text-2xl font-bold text-indigo-600">
          WillQuickTech
        </NavLink>
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-semibold"
                : "text-gray-700 hover:text-indigo-600 font-medium"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-semibold"
                : "text-gray-700 hover:text-indigo-600 font-medium"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-semibold"
                : "text-gray-700 hover:text-indigo-600 font-medium"
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-semibold"
                : "text-gray-700 hover:text-indigo-600 font-medium"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-semibold"
                : "text-gray-700 hover:text-indigo-600 font-medium"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}