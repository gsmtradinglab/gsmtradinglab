import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  variant?: "nav" | "full" | "hero" | "footer" | "mark";
  href?: string;
  className?: string;
  priority?: boolean;
};

export default function BrandLogo({ variant = "nav", href = "/", className = "", priority = false }: BrandLogoProps) {
  const isMark = variant === "mark" || variant === "nav";
  const src = isMark ? "/brand/gsm-logo-dark-compact.jpg" : "/brand/gsm-logo-dark-full.jpg";
  const sizes = variant === "hero" ? "(max-width: 768px) 220px, 360px" : variant === "footer" ? "260px" : "160px";

  const logo = (
    <div className={`brand-logo brand-logo-${variant} ${className}`}>
      <Image
        src={src}
        alt="GSM Trading Lab"
        width={isMark ? 512 : 1024}
        height={isMark ? 512 : 1024}
        sizes={sizes}
        priority={priority}
        className="brand-logo-img"
      />
      {variant === "nav" && (
        <div className="brand-logo-text">
          <strong>GSM Trading Lab</strong>
          <span>Master risk. Build discipline.</span>
        </div>
      )}
    </div>
  );

  if (!href) return logo;
  return <Link href={href} aria-label="GSM Trading Lab Home">{logo}</Link>;
}
