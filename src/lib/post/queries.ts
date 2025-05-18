import { postRepository } from "@/repositories/post";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";

export const findAllPublishedPostsCached = unstable_cache(
  async () => await postRepository.findAllPublished(),
  ["posts"],
  {
    revalidate: 60,
    tags: ["posts"],
  }
);

export const findPostBySlugCached = (slug: string) =>
  unstable_cache(
    async (slug: string) => {
      const post = await postRepository
        .findBySlug(slug)
        .catch(() => notFound());
      return post;
    },
    ["posts", "slug"],
    {
      revalidate: 60,
      tags: [`posts:${slug}`],
    }
  )(slug);

export const findPostByIdCached = (id: string) =>
  unstable_cache(
    async (id: string) => postRepository.findById(id),
    ["posts", "id"],
    {
      revalidate: 60,
      tags: [`posts:${id}`],
    }
  )(id);
