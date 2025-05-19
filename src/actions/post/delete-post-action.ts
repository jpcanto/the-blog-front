"use server";

import { JsonPostRepository } from "@/repositories/post/json-post-repository";
import { revalidateTag } from "next/cache";

export async function deletePostAction(id: string) {
  if (!id || typeof id !== "string") {
    return {
      error: "Dados inválidos",
    };
  }

  const repository = new JsonPostRepository();
  const post = await repository.findById(id);

  if (!post) {
    return {
      error: "Post não encontrado",
    };
  }

  await repository.delete(id);

  revalidateTag("posts");
  revalidateTag(`post-by-id-admin:${id}`);
  revalidateTag("all-published-posts");
  revalidateTag(`post-by-slug:${post.slug}`);

  return {
    error: "",
  };
}
