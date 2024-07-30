import { BaseLayout } from "@/components/features/layout/BaseLayout/BaseLayout";
import "@/styles/app.css";
import "@/styles/fonts.css";
import Lenis from "@studio-freight/lenis";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { GetLayoutQuery } from "../../lib/generated/sdk";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function App({
  Component,
  pageProps,
}: AppProps & {
  layout: GetLayoutQuery;
}) {
  gsap.registerPlugin(useGSAP);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      orientation: "vertical", // vertical, horizontal
      gestureOrientation: "vertical", // vertical, horizontal, both
      smoothWheel: true,
      smoothTouch: false,
      infinite: false,
    });
    window.Lenis = lenis;

    let rAF: number;
    function raf(time: number) {
      lenis.raf(time);
      rAF = requestAnimationFrame(raf);
    }
    rAF = requestAnimationFrame(raf);

    return () => {
      rAF = requestAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);

  return (
    <>
      {/* <PageTransition /> */}
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </>
  );
}
