import {
  formatRelativeDatetime,
  formatDatetime,
} from "@/utils/format-datetime";

import { PostHeading } from "../PostHeading";
import clsx from "clsx";

type PostSummaryProps = {
  postHeading: "h1" | "h2";
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export function PostSummary({
  postHeading,
  postLink,
  createdAt,
  title,
  excerpt,
}: PostSummaryProps) {
  return (
    <div className={clsx("flex flex-col gap-2", "sm:justify-center")}>
      <time
        dateTime={createdAt}
        className="block text-sm/tight text-slate-600"
        title={formatRelativeDatetime(createdAt)}
      >
        {formatDatetime(createdAt)}
      </time>
      <PostHeading as={postHeading} url={postLink}>
        {title}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  );
}
