import React from 'react';
import BlogSection from '../components/BlogSection';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <BlogSection />
    </div>
  );
};

export default HomePage;
