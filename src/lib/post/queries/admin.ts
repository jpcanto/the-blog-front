import { unstable_cache } from "next/cache";
// import { cache } from "react";

import { postRepository } from "@/repositories/post";
import { asyncDelay } from "@/utils/async-delay";

export const findPostByIdAdminCached = (id: string) =>
  unstable_cache(
    async (id: string) => postRepository.findById(id),
    ["post-by-id-admin"],
    {
      revalidate: 6,
      tags: [`post-by-id-admin:${id}`],
    }
  )(id);

// export const findAllPostsAdminCached = cache(
//   unstable_cache(async () => postRepository.findAll(), ["all-posts-admin"], {
//     revalidate: 6,
//     tags: [`all-posts-admin`],
//   })
// );

export const findAllPostsAdminCached = async () => {
  await asyncDelay(1000, true);
  return postRepository.findAll();
};
