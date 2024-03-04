import Link from 'next/link';
import React from 'react';

const DetailsPage = async({params}) => {
  const res = await fetch(`http://localhost:5000/posts/${params.id}`)
  const post = await res.json();
  // console.log(post);
    return (
        <div>
            <div
              className="card w-[700px] mx-auto mt-12 text-white bg-gray-500 rounded-md mx-auto p-12"
            >
              <p className="text-2xl font-bold">{post.title}</p>
              <p className="text-lg font-semibold">{post.description}</p>
              <div className="flex justify-between gap-12 items-center mt-4">
                <div className="flex gap-6">
                <button className="text-xl h-8 w-8 bg-red-600 rounded-full">
                  ❤
                </button>
                <p>Likes: {post.likeCounts}</p>
                </div>
                <div><Link href={`/posts`}><button className="btn btn-primary text-white text-lg">Back</button></Link></div>
              </div>
            </div>
        </div>
    );
};

export default DetailsPage;