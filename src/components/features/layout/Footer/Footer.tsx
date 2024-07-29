import Image from "next/image";

export function Footer() {
  return (
    <footer className="mt-[48px] mb-[25px] md:mb-[0] md:mt-[52px] 2xl:container mx-auto px-[16px] md:px-[32px]">
      <Image
        src="/images/footer.png"
        alt="Wear Everyday"
        width={1376}
        height={486}
      />
    </footer>
  );
}
