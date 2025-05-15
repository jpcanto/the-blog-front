import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

type PostCoverImageProps = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
  priority?: boolean;
};

export function PostCoverImage({ imageProps, linkProps }: PostCoverImageProps) {
  return (
    <Link
      {...linkProps}
      className={clsx(
        "w-full h-full overflow-hidden rounded-xl",
        linkProps.className
      )}
    >
      <Image
        {...imageProps}
        className={clsx(
          "w-full h-full object-cover object-center",
          "group-hover:scale-105 transition-transform duration-300",
          imageProps.className
        )}
      />
    </Link>
  );
}
