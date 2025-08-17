import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-around px-3 py-4 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="text-3xl font-bold text-indigo-600">
            Higher
          </Link>
        </div>

        {/* Menu */}
        <div className="menu flex gap-5 items-center">
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
            className="transition duration-300 ease-in-out hover:scale-110 px-5 py-2 text-indigo-600
             rounded-lg border-2 border-indigo-600 bg-white hover:bg-indigo-600 hover:text-white"
          >
            Login
          </button>
        </div>
      </nav>
    </>
  );
}
