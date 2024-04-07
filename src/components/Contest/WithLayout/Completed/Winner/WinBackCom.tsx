"use client";
import Image from "next/image";
import { ComponentPropsWithoutRef, ReactElement, ReactNode } from "react";
import classNames, { Argument } from "classnames";

interface BackgroundImageProps {
  children?: ReactNode;
  className?: Argument;
  image: ReactElement<typeof Image>;
}

type BackgroundImageAdditionalProps = Omit<
  ComponentPropsWithoutRef<"div">,
  keyof BackgroundImageProps
>;

export default function BackgroundImage({
  children,
  className,
  image,
  ...props
}: BackgroundImageProps & BackgroundImageAdditionalProps) {
  return (
    <div
      className={classNames(
        "relative  min-h-[30vh] object-cover min-w-fit",
        "overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0  -z-10">{image}</div>
      <div className="z-10 flex h-full justify-center min-h-[30vh]">
        {children}
      </div>
    </div>
  );
}
