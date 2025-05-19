import { findAllPostsAdminCached } from "@/lib/post/queries/admin";
import clsx from "clsx";
import Link from "next/link";
import { ButtonDeletePost } from "../Admin/ButtonDeletePost";
import { ErrorMessage } from "../ErrorMessage";

export default async function PostsListAdmin() {
  const posts = await findAllPostsAdminCached();

  if (posts.length === 0) {
    return (
      <ErrorMessage
        title="Erro"
        description="Nenhum post encontrado"
        action={false}
      />
    );
  }

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
