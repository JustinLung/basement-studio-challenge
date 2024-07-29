import Image from "next/image";

export interface ItemProps {
  title: string;
  price: number;
  src: string;
  alt: string;
}

export function Item(props: ItemProps) {
  const { src, alt, title, price } = props;
  return (
    <article className="relative w-full">
      <button className="w-full h-full">
        <div className="bg-custom-gradient w-full h-full flex items-center justify-center">
          <Image src={src} alt={alt} width={440} height={578} />
        </div>
        <div className="flex justify-between border-t-[3px] border-t-white py-[8px] text-[1.3125rem]">
          <h2>{title}</h2>
          <span>${price}</span>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="">ADD TO CART</p>
          <Image src={src} alt={alt} width={220} height={289} />
        </div>
      </button>
    </article>
  );
}
