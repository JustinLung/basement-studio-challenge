import MetaTags from "@/components/features/MetaTags";
import { Hero } from "@/components/Hero/Hero";
import Marquee from "@/components/Marquee/Marquee";
import { Shop, shopItems } from "@/components/Shop/Shop";

interface PageProps {}

export default function Page(props: PageProps) {
  return (
    <>
      <MetaTags
        pageTitle={"Homepage"}
        pageDescription={"This is the homepage"}
        currentUrl={"/"}
      />
      <Hero />
      <Marquee />
      <Shop items={shopItems} />
    </>
  );
}
