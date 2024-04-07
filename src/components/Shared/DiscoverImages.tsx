import Image from "next/image";
import { ComponentPropsWithoutRef, ReactElement, ReactNode } from "react";
import classNames, { Argument } from "classnames";

interface DiscoverImageProps {
  children?: ReactNode;
  className?: Argument;
  image: ReactElement<typeof Image>;
}

type DiscoverImageAdditionalProps = Omit<
  ComponentPropsWithoutRef<"div">,
  keyof DiscoverImageProps
>;

export default function DiscoverImage({
  children,
  className,
  image,
  ...props
}: DiscoverImageProps & DiscoverImageAdditionalProps) {
  return (
    <div
      className={classNames("relative mb-40 w-[90%]", "", className)}
      {...props}
    >
      <div className="absolute inset-0 h-72  -z-10">{image}</div>
      <div className="z-10 ">{children}</div>
    </div>
  );
}
