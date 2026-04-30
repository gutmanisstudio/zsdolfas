import Image from "next/image";

type Props = {
  src?: string;
  alt: string;
  label: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export default function Photo({
  src,
  alt,
  label,
  className = "",
  priority,
  sizes = "100vw",
}: Props) {
  return (
    <div
      className={`relative overflow-hidden bg-neutral-900 ${className}`}
      data-photo-slot={label}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.08),_transparent_60%)]">
          <div className="text-center px-4">
            <div className="text-[10px] tracking-[0.4em] uppercase text-neutral-600">
              Foto vieta
            </div>
            <div className="mt-2 font-mono text-xs text-neutral-500">
              /public/photos/{label}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
