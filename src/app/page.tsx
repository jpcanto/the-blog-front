import { PostsList } from "@/components/Post/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostFeatured } from "@/components/Post/PostFeatured";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className="text-center font-bold text-6xl py-8">Footer</p>
      </footer>
    </Container>
  );
}
