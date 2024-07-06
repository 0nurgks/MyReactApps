import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../features/blogs/blogsSlice';
import BlogItem from './BlogItem';

const BlogList = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.items);
  const status = useSelector((state) => state.blogs.status);
  const error = useSelector((state) => state.blogs.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBlogs());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'succeeded') {
    content = blogs.map((blog) => (
      <BlogItem key={blog._id} blog={blog} />
    ));
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {content}
    </div>
  );
};

export default BlogList;
