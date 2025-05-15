import { PostCoverImage } from "../PostCoverImage";
import clsx from "clsx";
import { PostSummary } from "../PostSummary";
import { findAllPublishedPosts } from "@/lib/post/queries";

export async function PostsList() {
  const posts = await findAllPublishedPosts();

  return (
    <div
      className={clsx(
        "grid grid-cols-1 gap-8",
        "sm:grid-cols-2",
        "lg:grid-cols-3"
      )}
    >
      {posts.slice(1).map((post) => {
        const postLink = `/post/${post.slug}`;

        return (
          <div key={post.id} className="flex flex-col gap-4 group">
            <PostCoverImage
              imageProps={{
                src: post.coverImageUrl,
                alt: "Título do post",
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
              postHeading="h2"
              postLink={postLink}
              createdAt={post.createdAt}
              title={post.title}
              excerpt={post.excerpt}
            />
          </div>
        );
      })}
    </div>
  );
}
