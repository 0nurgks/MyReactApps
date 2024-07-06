const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/yourdatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  category: String,
  image: String
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = { mongoose, Blog };
