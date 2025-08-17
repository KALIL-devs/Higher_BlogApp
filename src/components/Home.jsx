import React from 'react';
 import { blogs } from '../data/blogs';
 import BlogPreview from '../components/BlogPreview';

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-[1200px] mx-auto">
        {blogs.map(blog => (
          <BlogPreview key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  );
}
