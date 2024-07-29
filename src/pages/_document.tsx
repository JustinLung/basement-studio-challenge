import { Html, Head, Main, NextScript } from "next/document";
import cn from "clsx";
import useMenu from "@/state/useMenu";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-black text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
