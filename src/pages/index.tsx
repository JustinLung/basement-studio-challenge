import MetaTags from "@/components/features/MetaTags";
import { Hero } from "@/components/shared/Hero/Hero";
import Marquee from "@/components/shared/Marquee/Marquee";
import { Shop, shopItems } from "@/components/shared/Shop/Shop";

interface PageProps {}

export default function Page(props: PageProps) {
  return (
    <>
      <MetaTags
        pageTitle={"Basement Studio Code Challenge"}
        pageDescription={"This is the Basement Studio Code Challenge"}
        currentUrl={"/"}
        image="/images/og.png"
      />
      <Hero />
      <Marquee />
      <Shop items={shopItems} />
    </>
  );
}
