import Link from "next/link";

export async function generateStaticParams() {
  const res = await fetch(`http://localhost:5000/posts`)
  const data = res.json()
  const ids = data.map.slice(0,3)((post)=> {
    return { id: post.id + "" }
  })
  console.log(ids);
  return ids
}

const PostPage = async () => {
  //SSG - Static Server Side Generation rendering
  const res = await fetch(`http://localhost:5000/posts`,{cache: "no-store"});
  const data = await res.json();

  return (
    <div className="p-12">
      <div className="w-full grid grid-cols-3 gap-3">
        {data.map((post) => {
          return (
            <div
              key={post.id}
              className="card text-white bg-gray-500 rounded-md mx-auto p-12"
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
                <div><Link href={`/posts/${post.id}`}><button className="btn btn-primary text-white text-lg">Details</button></Link></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostPage;
