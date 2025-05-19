import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile, writeFile } from "fs/promises";
import { SIMULATE_WAIT_IN_MS } from "@/lib/constants";
import { asyncDelay } from "@/utils/async-delay";

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  "src",
  "db",
  "seed",
  "posts.json"
);

export class JsonPostRepository implements PostRepository {
  private async simulateWait(): Promise<void> {
    return await asyncDelay(SIMULATE_WAIT_IN_MS, true);
  }

  private async readFromDisk(): Promise<PostModel[]> {
    await this.simulateWait();
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
    const { posts } = JSON.parse(jsonContent);
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    await this.simulateWait();
    const posts = await this.readFromDisk();
    return posts;
  }

  async findAllPublished(): Promise<PostModel[]> {
    console.log("findAllPublished");
    await this.simulateWait();
    const posts = await this.readFromDisk();
    return posts.filter((post) => post.published);
  }

  async findById(id: string): Promise<PostModel> {
    await this.simulateWait();
    const posts = await this.readFromDisk();
    const post = posts.find((post) => post.id === id);

    if (!post) {
      throw new Error(`Post not found`);
    }

    return post;
  }

  async findBySlug(slug: string): Promise<PostModel> {
    await this.simulateWait();
    const posts = await this.readFromDisk();
    const post = posts.find((post) => post.slug === slug);

    if (!post) {
      throw new Error(`Post not found`);
    }

    return post;
  }

  async delete(id: string): Promise<void> {
    await this.simulateWait();
    const posts = await this.readFromDisk();
    const post = posts.find((post) => post.id === id);

    if (!post) {
      throw new Error(`Post not found`);
    }

    const newPosts = posts.filter((post) => post.id !== id);
    await writeFile(
      JSON_POSTS_FILE_PATH,
      JSON.stringify({ posts: newPosts }, null, 2)
    );
  }
}
