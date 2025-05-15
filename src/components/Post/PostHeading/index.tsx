import clsx from "clsx";
import Link from "next/link";

type PostHeadingProps = {
  children: React.ReactNode;
  url?: string;
  as?: "h1" | "h2";
};

export function PostHeading({
  children = "",
  url = "#",
  as: Tag = "h2",
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: clsx("text-2xl/tight font-extrabold", "sm:text-4xl/tight"),
    h2: clsx("text-xl/tight font-bold"),
  };
  const commonClasses = "";

  return (
    <Tag className={clsx(headingClassesMap[Tag], commonClasses)}>
      <Link href={url} className="group-hover:text-slate-600 transition-colors">
        {children}
      </Link>
    </Tag>
  );
}
