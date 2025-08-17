import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="logo">
            <Link to="/" className="text-3xl font-bold text-indigo-600">
              Higher
            </Link>
          </div>

          {/* Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              to="/"
              className="cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:text-indigo-600"
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:text-indigo-600"
            >
              Blogs
            </Link>
            <Link
              to="/about"
              className="cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:text-indigo-600"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:text-indigo-600"
            >
              Contact
            </Link>
          </div>
            {/* Login Button */}
            <div>
              <button
                className="hidden transition duration-300 ease-in-out hover:scale-110 px-5 py-2 text-indigo-600
                rounded-lg border-2 border-indigo-600 bg-white hover:bg-indigo-600 hover:text-white"
              >
                Login
              </button>
            </div>
            {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t shadow-md">
            <div className="flex flex-col space-y-4 px-6 py-4">
              <a href="/" className="text-gray-700 hover:text-indigo-600">
                Home
              </a>
              <a href="/blog" className="text-gray-700 hover:text-indigo-600">
                Blog
              </a>
              <a
                href="/categories"
                className="text-gray-700 hover:text-indigo-600"
              >
                Categories
              </a>
              <a href="/about" className="text-gray-700 hover:text-indigo-600">
                About
              </a>
              <a href="/contact" className="text-gray-700 hover:text-indigo-600">
                Contact
              </a>
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
              />
              <button
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 text-center"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
