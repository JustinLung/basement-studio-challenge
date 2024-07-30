import { Link } from "@/components/shared/Link/Link";
import useMenu from "@/state/useMenu";
import Image from "next/image";
import cn from "clsx";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { easeOutExpo } from "@/utils/transitions";
import { useGSAP } from "@gsap/react";
import { Cart } from "@/components/Cart/Cart";
export function Header() {
  const isMenuOpen = useMenu((state) => state.isMenuOpen);
  const ref = useRef(null);

  const tl = useRef<gsap.core.Timeline | null>(null);

  return (
    <header
      ref={ref}
      className={cn(
        "sticky top-0 z-10 flex justify-between items-center 2xl:container mx-auto px-[16px] md:px-[32px] py-[23px]",
        !isMenuOpen && "mix-blend-difference"
      )}
    >
      {/* Desktop Logo */}
      <Link href="/" className="hidden md:block">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          className="logo"
          width={192}
          height={28}
        />
      </Link>
      {/* Mobile Logo */}
      <Link href="/" className="block md:hidden">
        <Image
          src="/images/mobile-logo.svg"
          alt="Logo"
          className="logo"
          width={42}
          height={40}
        />
      </Link>
      <Image
        src="/images/hd-4k.svg"
        alt="HD 4k"
        width={284}
        height={24}
        className="hidden md:block"
      />
      <Cart />
    </header>
  );
}
