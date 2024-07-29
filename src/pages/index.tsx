import MetaTags from "@/components/features/MetaTags";
import { Hero } from "@/components/Hero/Hero";

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
    </>
  );
}
