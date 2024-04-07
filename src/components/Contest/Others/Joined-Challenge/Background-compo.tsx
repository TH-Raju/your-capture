"use client";
import Image from "next/image";
import { ComponentPropsWithoutRef, ReactElement, ReactNode } from "react";
import classNames, { Argument } from "classnames";

interface JoinedBackgroundImageProps {
  children?: ReactNode;
  className?: Argument;
  image: ReactElement<typeof Image>;
}

type JoinedBackgroundImageAdditionalProps = Omit<
  ComponentPropsWithoutRef<"div">,
  keyof JoinedBackgroundImageProps
>;

export default function JoinedBackgroundImage({
  children,
  className,
  image,
  ...props
}: JoinedBackgroundImageProps & JoinedBackgroundImageAdditionalProps) {
  return (
    <div
      className={classNames(
        "relative  min-h-[60vh] object-cover min-w-fit",
        "overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0  -z-10">{image}</div>
      <div className="z-10 flex h-full justify-center min-h-[60vh]">
        {children}
      </div>
    </div>
  );
}
