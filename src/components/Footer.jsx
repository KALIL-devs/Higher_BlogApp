export default function Footer() {
  return (
    <footer className="bg-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Black Card */}
        <div className="bg-black text-white rounded-2xl p-10 grid md:grid-cols-4 gap-8 shadow-lg">
          
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-400">Higher</h2>
            <p className="text-gray-300 mt-3 text-sm">
              A modern blog sharing insights, tutorials, and stories on tech,
              lifestyle, and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-indigo-400">Home</a></li>
              <li><a href="/blog" className="hover:text-indigo-400">Blogs</a></li>
              <li><a href="/about" className="hover:text-indigo-400">About</a></li>
              <li><a href="/contact" className="hover:text-indigo-400">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Categories</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-indigo-400">Tech</a></li>
              <li><a href="#" className="hover:text-indigo-400">Lifestyle</a></li>
              <li><a href="#" className="hover:text-indigo-400">Travel</a></li>
              <li><a href="#" className="hover:text-indigo-400">Food</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
            <p className="text-gray-300 text-sm mb-3">
              Get the latest updates directly in your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 w-full rounded-l-md text-black focus:outline-none"
              />
              <button className="bg-indigo-500 px-4 rounded-r-md hover:bg-indigo-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-gray-600 mt-6 text-sm">
          © {new Date().getFullYear()} Higher. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
        