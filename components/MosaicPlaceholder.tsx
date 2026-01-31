import Image from "next/image";
import { blurDataURL } from "@/src/lib/blur";

export type MosaicVariant =
  | "forest"
  | "water"
  | "agri"
  | "risk"
  | "infra"
  | "truecolor"
  | "falsecolor"
  | "ndvi";

const variantSrc: Record<MosaicVariant, string> = {
  forest: "/placeholders/mosaic-forest.svg",
  water: "/placeholders/mosaic-water.svg",
  agri: "/placeholders/mosaic-agri.svg",
  risk: "/placeholders/mosaic-risk.svg",
  infra: "/placeholders/mosaic-infra.svg",
  truecolor: "/placeholders/mosaic-truecolor.svg",
  falsecolor: "/placeholders/mosaic-falsecolor.svg",
  ndvi: "/placeholders/mosaic-ndvi.svg"
};

type MosaicPlaceholderProps = {
  variant: MosaicVariant;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
};

export function MosaicPlaceholder({
  variant,
  alt,
  className,
  fill = true,
  priority,
  sizes
}: MosaicPlaceholderProps) {
  const src = variantSrc[variant];

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      priority={priority}
      placeholder="blur"
      blurDataURL={blurDataURL}
      className={className}
    />
  );
}
