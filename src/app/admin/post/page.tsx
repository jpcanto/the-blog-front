import PostsListAdmin from "@/components/PostsListAdmin";
import { SpinLoader } from "@/components/SpinLoader";
import { Metadata } from "next";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Post Admin - New",
  description: "Create a new post for the blog",
};

export default async function AdminPostPage() {
  return (
    <Suspense fallback={<SpinLoader className="mb-16" />}>
      <PostsListAdmin />
    </Suspense>
  );
}
