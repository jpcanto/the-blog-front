import clsx from "clsx";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";
import { findAllPublishedPostsCached } from "@/lib/post/queries/public";

export async function PostFeatured() {
  const posts = await findAllPublishedPostsCached();
  const post = posts[0];

  const postLink = `/post/${post.slug}`;

  return (
    <section
      className={clsx("grid grid-cols-1 gap-8 mb-16 group", "sm:grid-cols-2")}
    >
      <PostCoverImage
        imageProps={{
          src: post.coverImageUrl,
          alt: post.title,
          width: 1200,
          height: 720,
          priority: true,
        }}
        linkProps={{
          href: postLink,
        }}
        priority={true}
      />
      <PostSummary
        postHeading="h1"
        postLink={postLink}
        createdAt={post.createdAt}
        title={post.title}
        excerpt={post.excerpt}
      />
    </section>
  );
}
