import { findPostBySlugCached } from "@/lib/post/queries";
import Image from "next/image";
import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";
import { SafeMarkdown } from "@/components/SafeMarkdown";
type PostDetailsPageProps = {
  slug: string;
};

export default async function PostDetails({ slug }: PostDetailsPageProps) {
  const post = await findPostBySlugCached(slug);

  return (
    <article className="mb-16">
      <header className="flex flex-col gap-4 mb-4">
        <Image
          src={post.coverImageUrl}
          alt={post.title}
          width={1200}
          height={720}
          className="rounded-xl"
        />

        <PostHeading url={`/post/${post.slug}`}>{post.title}</PostHeading>
        <p className="text-sm text-gray-500">
          {post.author} | <PostDate dateTime={post.createdAt} />
        </p>
      </header>

      <p className="text-xl text-slate-600 mb-8">{post.excerpt}</p>

      <SafeMarkdown markdown={post.content} />
    </article>
  );
}
