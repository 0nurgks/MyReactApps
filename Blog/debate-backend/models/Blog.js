const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }, // JSON formatında Draft.js içeriğini burada depolayın
  author: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String },
  date: { type: Date, default: Date.now }
});
