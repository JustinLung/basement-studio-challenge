import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { easeOutExpo } from "@/utils/transitions";

interface HeroProps {}

export function Hero(props: HeroProps) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.3,
        ease: easeOutExpo,
      }
    );
  }, []);
  return (
    <section>
      <Image
        ref={ref}
        className="opacity-0"
        src="/images/header.png"
        alt="Basement Supply Est. 2019"
        width={1376}
        height={365}
      />
    </section>
  );
}
