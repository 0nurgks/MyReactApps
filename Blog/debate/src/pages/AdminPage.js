import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    category: 'Game' // Varsayılan olarak Game kategorisini seçtik
  });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/blogs')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the blogs!', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataWithFile = new FormData();
    formDataWithFile.append('title', formData.title);
    formDataWithFile.append('content', formData.content);
    formDataWithFile.append('author', formData.author);
    formDataWithFile.append('category', formData.category); // Kategori bilgisini ekledik
    if (imageFile) {
      formDataWithFile.append('image', imageFile);
    }
  
    axios.post('http://localhost:5000/blogs/add', formDataWithFile, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        console.log(response.data);
        setBlogs([...blogs, response.data]);
        setFormData({
          title: '',
          content: '',
          author: '',
          category: 'Game' // Yeni blog ekledikten sonra varsayılan olarak Game kategorisini seçtik
        });
        setImageFile(null);
      })
      .catch(error => {
        console.error('There was an error adding the blog!', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/blogs/${id}`)
      .then(response => {
        console.log(response.data);
        setBlogs(blogs.filter(blog => blog.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the blog!', error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="Game">Game</option>
            <option value="Cinema">Cinema</option>
            <option value="Life">Life</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">Image</label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Blog</button>
      </form>

      <div>
        <h2 className="text-xl font-bold mb-2">Existing Blogs</h2>
        <ul>
          {blogs.map(blog => (
            <li key={blog.id} className="mb-2">
              {blog.image && <img src={`http://localhost:5000${blog.image}`} alt={blog.title} className="mb-2 w-full h-auto"/>}
              <h3 className="text-lg font-bold">{blog.title}</h3>
              <p>{blog.content}</p>
              <p><strong>Author:</strong> {blog.author}</p>
              <p><strong>Category:</strong> {blog.category}</p>
              <button onClick={() => handleDelete(blog.id)} className="bg-red-500 text-white px-4 py-2 rounded-md mt-2">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPage;
