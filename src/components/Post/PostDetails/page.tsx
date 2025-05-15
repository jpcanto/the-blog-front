import { findPostBySlugCached } from "@/lib/post/queries";

type PostDetailsPageProps = {
  slug: string;
};

export default async function PostDetails({ slug }: PostDetailsPageProps) {
  const post = await findPostBySlugCached(slug);

  return (
    <div>
      <p>{post.content}</p>
    </div>
  );
}
