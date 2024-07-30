import MetaTags from "@/components/features/MetaTags";
import { Hero } from "@/components/shared/Hero/Hero";
import Marquee from "@/components/shared/Marquee/Marquee";
import { Shop, shopItems } from "@/components/shared/Shop/Shop";

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
