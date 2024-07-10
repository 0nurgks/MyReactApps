import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ blog }) => {
  const contentPreview = blog.content && blog.content.length > 100 ? `${blog.content.substring(0, 100)}...` : blog.content;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
      {blog.image && <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />}
      <div className="p-4">
        <Link to={`/blog/${blog.id}`} className="text-xl font-semibold text-blue-500 hover:text-blue-700">{blog.title}</Link>
        <p className="text-gray-600">{contentPreview}</p>
      </div>
    </div>
  );
};

export default BlogItem;
