"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

type SafeImageProps = {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  /** Fallback içinde görünsün mü (gradient + kısa metin) */
  showCaption?: boolean;
};

export default function SafeImage({
  src,
  alt,
  className,
  wrapperClassName,
  fill,
  width,
  height,
  sizes,
  priority,
  showCaption = false,
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  const handleError = useCallback(() => {
    setFailed(true);
  }, []);

  if (failed) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#e8ece3] via-[#f7f4ef] to-[#dcd8cf] shadow-inner ring-1 ring-black/5 ${wrapperClassName ?? ""}`}
        role="img"
        aria-label={alt}
      >
        <span className="pointer-events-none max-w-[12rem] px-4 text-center text-sm leading-snug text-[var(--muted)]">
          Görsel yüklenemedi ·{" "}
          <span className="font-medium text-[var(--olive)]">
            yakında eklenecek
          </span>
        </span>
      </div>
    );
  }

  const img = fill ? (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      onError={handleError}
    />
  ) : (
    <Image
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      sizes={sizes}
      priority={priority}
      className={className}
      onError={handleError}
    />
  );

  return (
    <div className={`relative overflow-hidden rounded-2xl ${wrapperClassName ?? ""}`}>
      {img}
      {showCaption && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-4 pt-16">
          <p className="text-sm font-medium text-white drop-shadow">{alt}</p>
        </div>
      )}
    </div>
  );
}
