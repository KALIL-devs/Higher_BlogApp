import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [isLoginOpen, setIsLoginOpen] = useState(false); // login modal
  const [isLoggedIn, setIsLoggedIn] = useState(false); // login state
  const modalRef = useRef(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validUser = {
    username: "admin",
    password: "1234",
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === validUser.username && password === validUser.password) {
      setIsLoggedIn(true);
      setError("");
      setIsLoginOpen(false); // close modal
    } else {
      setError("Invalid username or password ❌");
    }
  };

  const handleLogout = () => {
    if(confirm("are you want to logout?")){
      setIsLoggedIn(false);
      setUsername("");
      setPassword("");
    }
  };

    // ✅ Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

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

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-indigo-600">Home</Link>
            <Link to="/blog" className="hover:text-indigo-600">Blogs</Link>
            <Link to="/about" className="hover:text-indigo-600">About</Link>
            <Link to="/contact" className="hover:text-indigo-600">Contact</Link>

            {/* Login Button */}
            <button
              onClick={isLoggedIn ? handleLogout : () => setIsLoginOpen(true)}
              className="transition duration-300 ease-in-out hover:scale-110 px-5 py-2 text-indigo-600
              rounded-lg border-2 border-indigo-600 bg-white hover:bg-indigo-600 hover:text-white"
            >
              {isLoggedIn ? "Logout" : "Login"}
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
              <Link to="/" className="hover:text-indigo-600">Home</Link>
              <Link to="/blog" className="hover:text-indigo-600">Blog</Link>
              <Link to="/about" className="hover:text-indigo-600">About</Link>
              <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
              <button
                onClick={isLoggedIn ? handleLogout : () => setIsLoginOpen(true)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 text-center"
              >
                {isLoggedIn ? "Logout" : "Login"}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {isLoginOpen && !isLoggedIn && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border p-2 rounded mb-3"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border p-2 rounded mb-3"
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
