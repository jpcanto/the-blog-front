import { postRepository } from "@/repositories/post";

export async function PostsList() {
  const posts = await postRepository.findAll();
  
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
