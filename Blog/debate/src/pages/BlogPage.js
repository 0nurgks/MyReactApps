import React, { useState, useEffect } from 'react';
import axios from 'axios'; // axios import edildi
import { useParams } from 'react-router-dom';

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/blogs/${id}`)
      .then(response => {
        setBlog(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the blog!', error);
      });
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
      <p>{blog.content}</p>
      <p><strong>Author:</strong> {blog.author}</p>
      <p><strong>Date:</strong> {new Date(blog.date).toLocaleDateString()}</p>
    </div>
  );
};

export default BlogPage;
