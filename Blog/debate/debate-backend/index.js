const { mongoose, Blog } = require('./mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// CORS middleware
app.use(cors());

// Body parser middleware
app.use(express.json());

app.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.post('/blogs/add', async (req, res) => {
  const blogData = req.body;
  const newBlog = new Blog({
    title: blogData.title,
    content: blogData.content,
    author: blogData.author,
    category: blogData.category,
    image: blogData.image
  });
  try {
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Bad Request' });
  }
});

app.get('/blogs/:id', async (req, res) => {
  const blogId = req.params.id;
  try {
    const blog = await Blog.findById(blogId);
    if (!blog) {
      res.status(404).json({ message: 'Blog not found' });
      return;
    }
    res.status(200).json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.delete('/blogs/:id', async (req, res) => {
  const blogId = req.params.id;
  try {
    const blog = await Blog.findById(blogId);
    if (!blog) {
      res.status(404).json({ message: 'Blog not found' });
      return;
    }
    await blog.remove();
    res.status(200).json({ message: 'Blog deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
