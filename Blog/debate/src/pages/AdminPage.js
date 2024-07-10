import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const AdminPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    content: EditorState.createEmpty(),
    author: '',
    category: 'Game'
  });
  const [imageFile, setImageFile] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

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
    formDataWithFile.append('content', JSON.stringify(convertToRaw(formData.content.getCurrentContent())));
    formDataWithFile.append('author', formData.author);
    formDataWithFile.append('category', formData.category);
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
          content: EditorState.createEmpty(),
          author: '',
          category: 'Game'
        });
        setImageFile(null);
      })
      .catch(error => {
        console.error('There was an error adding the blog!', error);
      });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/blogs/${id}`);
      setBlogs(blogs.filter(blog => blog._id !== id));
    } catch (error) {
      console.error('There was an error deleting the blog!', error);
    }
  };

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);
    const sortedBlogs = [...blogs].sort((a, b) => {
      if (a.title && b.title) {
        if (order === 'asc') {
          return a.title.localeCompare(b.title);
        } else {
          return b.title.localeCompare(a.title);
        }
      } else {
        return 0;
      }
    });
    setBlogs(sortedBlogs);
  };

  const handleEditorChange = (contentState) => {
    setFormData({
      ...formData,
      content: contentState
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
          <Editor
            editorState={formData.content}
            onEditorStateChange={handleEditorChange}
            wrapperClassName="mt-1 block w-full border border-gray-300 rounded-md"
            toolbar={{
              image: {
                uploadCallback: handleImageUploadCallback,
                alt: { present: true, mandatory: false },
                previewImage: true,
                inputAccept: 'image/*',
                defaultSize: {
                  height: 'auto',
                  width: '100%',
                },
              },
            }}
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
        <label className="block text-sm font-medium text-gray-700">Sort By:</label>
        <select value={sortOrder} onChange={handleSortChange} className="mb-4 mt-1 block w-full p-2 border border-gray-300 rounded-md">
          <option value="asc">Title Ascending</option>
          <option value="desc">Title Descending</option>
        </select>
        <ul className="grid grid-cols-3 gap-4">
          {blogs.map(blog => (
            <li key={blog._id} className="bg-white p-4 shadow rounded-md cursor-pointer" onClick={() => handleBlogClick(blog)}>
              {blog.image && <img src={`http://localhost:5000${blog.image}`} alt={blog.title} className="mb-2 w-full h-32 object-cover rounded"/>}
              <h3 className="text-lg font-bold">{blog.title}</h3>
              <p>{blog.content ? blog.content.slice(0, 100) : 'No content available'}...</p>
              <p><strong>Author:</strong> {blog.author}</p>
              <p><strong>Category:</strong> {blog.category}</p>
            </li>
          ))}
        </ul>
      </div>

      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={() => setSelectedBlog(null)}>
          <div className="bg-white p-6 rounded-md shadow-lg max-w-2xl w-full relative" onClick={(e) => e.stopPropagation()}>
            {selectedBlog.image && <img src={`http://localhost:5000${selectedBlog.image}`} alt={selectedBlog.title} className="mb-4 w-full h-64 object-cover rounded"/>}
            <h3 className="text-2xl font-bold mb-4">{selectedBlog.title}</h3>
            <p className="mb-4">{selectedBlog.content}</p>
            <p><strong>Author:</strong> {selectedBlog.author}</p>
            <p><strong>Category:</strong> {selectedBlog.category}</p>
            <button onClick={() => handleDelete(selectedBlog._id)} className="bg-red-500 text-white px-4 py-2 rounded-md mt-4">Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Resim yükleme işlevi örneği
const handleImageUploadCallback = (file) => {
  return new Promise(
    (resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve({ data: { link: reader.result } });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    }
  );
};

export default AdminPage;
