import { blogs } from '../data/blogs';

const BlogPreview = ({ blog }) => {
  return (
    <div className="rounded-lg my-4 p-4 transition-transform duration-300 hover:scale-105 bg-white shadow-md min-w-[150px]">
    <div className="w-full aspect-[16/9]">
    <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-full rounded-lg object-cover"
    />
    </div>
      <h2 className="mt-3 text-base font-semibold">{blog.title}</h2>
      <p className="text-xs text-gray-500 italic">{blog.date}</p>
      <p className="mt-2 text-sm text-gray-700">{blog.excerpt}</p>
      <button className="mt-3 transition duration-300 ease-in-out hover:scale-110 px-4 py-2 text-indigo-600 rounded-lg border border-indigo-600 bg-white hover:bg-indigo-600 hover:text-white text-sm">
        Read More
      </button>
    </div>
  );
};

export default BlogPreview;