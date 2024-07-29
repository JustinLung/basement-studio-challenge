import { ReactNode } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { PageTransition } from "@/components/shared/PageTransition/PageTransition";

interface BaseLayoutProps {
  children: ReactNode;
}

export function BaseLayout(props: BaseLayoutProps) {
  return (
    <>
      <Header />
      <main className="2xl:container mx-auto px-[16px] md:px-[32px]">
        {props.children}
      </main>
      <Footer />
      <PageTransition />
    </>
  );
}
