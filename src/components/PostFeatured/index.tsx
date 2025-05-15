import clsx from "clsx";
import { PostHeading } from "../PostHeading";
import { PostCoverImage } from "../PostCoverImage";

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
      <div className={clsx("flex flex-col gap-2", "sm:justify-center")}>
        <time
          dateTime="2025-05-15"
          className="block text-sm/tight text-slate-600"
        >
          2025-05-15
        </time>
        <PostHeading as="h1" url={postLink}>
          Lorem Ipsum
        </PostHeading>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
        </p>
      </div>
    </section>
  );
}
