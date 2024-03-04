// import React from 'react';
// import PropTypes from 'prop-types';

const page = async () => {
  const res = await fetch("http://localhost:5000/posts", {
    cache: "force-cache",
  });
  const posts = await res.json();
  return (
    <div className="w-full">
      {posts.map((post) => (
        <div
          key={post.id}
          className="card my-3 w-[70%] bg-gray-100 shadow-xl mx-auto text-gray-600"
        >
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.description}</p>
            <p>Likes: {post.likeCounts}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">See More...</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

page.propTypes = {};

export default page;
