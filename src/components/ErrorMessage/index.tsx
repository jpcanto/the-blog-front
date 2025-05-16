import clsx from "clsx";
import Link from "next/link";

type ErrorMessageProps = {
  statusCode: string;
  description: string;
};

export function ErrorMessage({ statusCode, description }: ErrorMessageProps) {
  return (
    <div
      className={clsx(
        "min-h-[320px]",
        "mb-16 p-8 rounded-xl",
        "flex flex-col items-center justify-center",
        "text-center bg-slate-900 text-slate-100"
      )}
    >
      <h1 className="text-7xl font-extrabold mb-8">{statusCode}</h1>
      <p className="text-slate-600">{description}</p>
      <Link
        href="/"
        className="text-slate-400 hover:text-slate-300 transition-colors"
      >
        Go back to the home page
      </Link>
    </div>
  );
}
