import clsx from "clsx";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";

export function PostFeatured() {
  const slug = "";
  const postLink = `/post/${slug}`;

  return (
    <section
      className={clsx("grid grid-cols-1 gap-8 mb-16 group", "sm:grid-cols-2")}
    >
      <PostCoverImage
        imageProps={{
          src: "/images/image_0.png",
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
        postHeading="h1"
        postLink={postLink}
        createdAt="2025-05-15"
        title="Lorem Ipsum"
        excerpt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
    </section>
  );
}
