import {
  formatDatetime,
  formatRelativeDatetime,
} from "@/utils/format-datetime";

type PostDateProps = {
  dateTime: string;
};

export function PostDate({ dateTime }: PostDateProps) {
  return (
    <time
      dateTime={dateTime}
      className="text-sm/tight text-slate-600"
      title={formatRelativeDatetime(dateTime)}
    >
      {formatDatetime(dateTime)}
    </time>
  );
}
