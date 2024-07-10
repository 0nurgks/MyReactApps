// routes/blogs.js
const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog'); // Blog modelini burada kullanıyor olmanız gerekiyor

// GET /blogs endpoint'i
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find(); // Tüm blogları bulmak için model kullanılıyor
    res.json(blogs);
  } catch (err) {
    console.error('Error fetching blogs:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST /blogs endpoint'i
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  
  try {
    const newBlog = new Blog({ title, content });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    console.error('Error creating blog:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
