import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ blog }) => {
  // blog.content varsa ve içeriği uzunsa sadece ilk 100 karakterini alıyoruz
  const contentPreview = blog.content && blog.content.length > 100 ? `${blog.content.substring(0, 100)}...` : blog.content;

  return (
    <div className="border p-4 mb-4">
      {blog.image && <img src={blog.image} alt={blog.title} className="mb-2 w-full h-auto"/>}
      <Link to={`/blog/${blog.id}`} className="text-xl text-blue-500">{blog.title}</Link>
      <p>{contentPreview}</p>
    </div>
  );
};

export default BlogItem;
