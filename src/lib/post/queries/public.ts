import { postRepository } from "@/repositories/post";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import { cache } from "react";

export const findAllPublishedPostsCached = cache(unstable_cache(
  async () => await postRepository.findAllPublished(),
  ["all-published-posts"],
  {
    revalidate: 60,
    tags: ["all-published-posts"],
  }
));

export const findPublishedPostBySlugCached = (slug: string) =>
  unstable_cache(
    async (slug: string) => {
      const post = await postRepository
        .findBySlug(slug)
        .catch(() => notFound());
      return post;
    },
    ["published-post-by-slug"],
    {
      revalidate: 60,
      tags: [`published-post-by-slug:${slug}`],
    }
  )(slug);
