import { Link } from "@/components/shared/Link/Link";
import useMenu from "@/state/useMenu";
import Image from "next/image";
import cn from "clsx";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { easeOutExpo } from "@/utils/transitions";
import { useGSAP } from "@gsap/react";

export function Header() {
  const { isMenuOpen, openMenu, closeMenu } = useMenu();
  const ref = useRef(null);
  const cartRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      tl.current = gsap.timeline({ paused: true });

      tl.current.to(cartRef.current, {
        opacity: 1,
        x: "0%",
      });
    },
    {
      dependencies: [cartRef],
    }
  );

  // useGSAP(() => {
  //   tl.current = gsap.timeline({ paused: true }).to(cartRef.current, {
  //     opacity: 1,
  //     x: "0%",
  //   });
  // }, {});

  useEffect(()=> {
    if(isMenuOpen) {
      tl.current?.play()
    } else {
      tl.current?.reverse()
    }
  })


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
      <button
        className="border-[1px] text-[0.875rem] md:text-[1.125rem] text-[bold] border-white px-[21px] py-[12px] md:px-[32px] md:py-[13px] rounded-full"
        onClick={openMenu}
      >
        Cart (0)
      </button>
      <menu
        className="absolute bg-black z-10 right-0 top-0 w-full h-svh md:w-auto px-[32px]"
        ref={cartRef}
        style={{ display: isMenuOpen ? "block" : "none" }}
      >
        <div className="relative">
          <button
            className="ml-auto flex mt-[42px]"
            onClick={() => {
              closeMenu();
            }}
          >
            → Close
          </button>
          <p className="text-[7rem] uppercase h-auto">Your Cart</p>
        </div>
      </menu>
    </header>
  );
}
