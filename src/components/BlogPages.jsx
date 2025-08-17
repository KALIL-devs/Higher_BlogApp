import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blogs";

export default function BlogPage(){
    const {id} = useParams();
    const blog = blogs.find((b) => b.id === id);

    if (!blog) {
      return <h2 className="text-center text-red-500 mt-10">Blog not found</h2>;
    }

    return(
      <div className="max-w-3xl mx-auto p-6">
        <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 object-cover rounded-lg"
        />
        <h1 className="mt-4 text-3xl font-bold">{blog.title}</h1>
        <p className="text-sm text-gray-500 italic">{blog.date}</p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            {blog.content}
        </p>

        <Link to="/">
            <button className="mt-6 px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
            Back to Blogs
            </button>
        </Link>
      </div>
    )
}