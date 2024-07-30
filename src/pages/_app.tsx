import { BaseLayout } from "@/components/features/layout/BaseLayout/BaseLayout";
import "@/styles/app.css";
import "@/styles/fonts.css";
import Lenis from "@studio-freight/lenis";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import useMenu from "@/state/useMenu";
import { useMedia } from "react-use";

function App({ Component, pageProps }: AppProps) {
  const isMenuOpen = useMenu((state) => state.isMenuOpen);
  const isDesktop = useMedia("(min-width: 1024px)");

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
      cancelAnimationFrame(rAF);
      lenis?.destroy();
    };
  }, []);

  useEffect(() => {
    if (isDesktop && isMenuOpen) {
      window.Lenis.stop();
    } else {
      window.Lenis.start();
    }
  }, [isMenuOpen, isDesktop]);

  return (
    <>
      {/* <PageTransition /> */}
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </>
  );
}

export default App;
