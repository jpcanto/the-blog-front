import clsx from "clsx";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

type SafeMarkdownProps = {
  markdown: string;
};

export function SafeMarkdown({ markdown }: SafeMarkdownProps) {
  return (
    <div
      className={clsx(
        "prose prose-slate",
        "w-full max-w-none",
        "overflow-hidden",
        "prose-a:transition-colors prose-a:no-underline",
        "prose-a:text-blue-500 prose-a:hover:text-blue-700",
        "prose-a:hover:underline prose-img:mx-auto prose-img:rounded-lg",
        "lg:prose-lg"
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
        components={{
          table: ({ node, ...props }) => {
            if (!node?.children) return null;

            return (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]" {...props}></table>
              </div>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
