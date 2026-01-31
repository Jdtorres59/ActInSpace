import Image from "next/image";
import { blurDataURL } from "@/src/lib/blur";

export type SignalVariant =
  | "narcotics"
  | "mining"
  | "deforestation"
  | "infrastructure"
  | "spectral"
  | "riskmap";

const variantSrc: Record<SignalVariant, string> = {
  narcotics: "/Narcotrafico.jpg",
  mining: "/mineria-ilegal.jpg",
  deforestation: "/deforestacion.jpg",
  infrastructure: "/infraestructura.jpg",
  spectral: "/placeholders/spectral-card.svg",
  riskmap: "/placeholders/risk-map.svg"
};

type SignalPlaceholderProps = {
  variant: SignalVariant;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function SignalPlaceholder({
  variant,
  alt,
  className,
  sizes,
  priority
}: SignalPlaceholderProps) {
  return (
    <Image
      src={variantSrc[variant]}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      placeholder="blur"
      blurDataURL={blurDataURL}
      className={className}
    />
  );
}
