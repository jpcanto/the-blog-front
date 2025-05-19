import { findPublishedPostBySlugCached } from "@/lib/post/queries/public";
import { Metadata } from "next";
import { Suspense } from "react";
import { SpinLoader } from "@/components/SpinLoader";
import PostDetails from "@/components/Post/PostDetails/page";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPublishedPostBySlugCached(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  return (
    <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
      <PostDetails slug={slug} />
    </Suspense>
  );
}
