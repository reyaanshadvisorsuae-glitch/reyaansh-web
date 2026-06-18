import Image from "next/image";
import { siteLogoAlt, siteLogoSrc } from "@/lib/brand";

type SiteLogoProps = {
  className?: string;
  priority?: boolean;
  size?: "header" | "footer";
};

const sizeClasses = {
  footer: {
    image: "h-[150px] w-[260px] max-w-none object-cover object-center",
    wrapper: "h-16 w-[240px] overflow-hidden",
  },
  header: {
    image: "h-[116px] w-[202px] max-w-none object-cover object-center sm:h-[126px] sm:w-[220px] lg:h-[132px] lg:w-[230px]",
    wrapper: "h-12 w-[170px] overflow-hidden rounded-[0.85rem] sm:h-[52px] sm:w-[188px] lg:h-14 lg:w-[200px]",
  },
} as const;

export function SiteLogo({
  className = "",
  priority = false,
  size = "header",
}: SiteLogoProps) {
  return (
    <span
      className={`inline-flex items-center ${sizeClasses[size].wrapper} ${className}`.trim()}
    >
      <Image
        alt={siteLogoAlt}
        className={sizeClasses[size].image}
        height={size === "footer" ? 96 : 112}
        priority={priority}
        src={siteLogoSrc}
        width={size === "footer" ? 300 : 260}
      />
    </span>
  );
}
