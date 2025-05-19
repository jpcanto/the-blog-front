import { findAllPostsAdminCached } from "@/lib/post/queries/admin";
import clsx from "clsx";
import Link from "next/link";
import { ButtonDeletePost } from "../Admin/ButtonDeletePost";

export default async function PostsListAdmin() {
  const posts = await findAllPostsAdminCached();

  return (
    <div className="mb-16">
      {posts.map((post) => {
        return (
          <div
            className={clsx(
              "p-2",
              !post.published && "bg-slate-300",
              "flex gap-2 items-center justify-between"
            )}
            key={post.id}
          >
            <Link href={`/admin/post/${post.id}`}>{post.title}</Link>

            {!post.published && (
              <span className="text-xs text-slate-600 italic">
                {" "}
                (Não publicado)
              </span>
            )}
            <ButtonDeletePost id={post.id} title={post.title} />
          </div>
        );
      })}
    </div>
  );
}
