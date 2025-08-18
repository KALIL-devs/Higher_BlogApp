import React, { useState } from 'react';
import { blogs } from '../data/blogs';
import BlogPreview from '../components/BlogPreview';
import Navbar from './Navbar';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="bg-slate-100 py-16 px-4 flex justify-center items-center text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Heartfelt <span className="text-purple-600">Reflections</span>: Stories of love, loss and growth
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Welcome to our blog, A place where thoughts turn into words and ideas spark inspiration. 
            Whether you're here to explore insightful articles, learn something new, 
            or simply enjoy engaging content on topics ranging from tech and lifestyle to self-growth and productivity, 
            there's always something valuable waiting for you here.
          </p>
        </div>
      </section>

      {/* First Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6  mx-0 lg:mx-10 justify-around">
        {blogs.map(blog => (
          <BlogPreview key={blog.id} blog={blog} />
        ))}
      </div>
      
    </>
  );
}
