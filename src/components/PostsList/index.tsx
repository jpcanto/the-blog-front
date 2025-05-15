import { postRepository } from "@/repositories/post";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";
import clsx from "clsx";

export async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div
      className={clsx(
        "grid grid-cols-1 gap-8",
        "sm:grid-cols-2",
        "lg:grid-cols-3"
      )}
    >
      {posts.map((post) => {
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

            <div className={clsx("flex flex-col gap-2", "sm:justify-center")}>
              <time
                dateTime={post.createdAt}
                className="block text-sm/tight text-slate-600"
              >
                {post.createdAt}
              </time>
              <PostHeading as="h2" url={postLink}>
                {post.title}
              </PostHeading>
              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
