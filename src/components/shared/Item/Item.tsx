import Image from "next/image";
import { useCartStore } from "@/state/useCart";

export interface ItemProps {
  title: string;
  price: number;
  src: string;
  alt: string;
}

export function Item(props: ItemProps) {
  const { src, alt, title, price } = props;
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ title, price, src, alt });
  };

  return (
    <article className="relative w-full group pointer">
      <button className="w-full h-full" onClick={handleAddToCart}>
        <div className="bg-custom-gradient w-full h-full flex items-center justify-center">
          <Image src={src} alt={alt} width={440} height={578} />
        </div>
        <div className="flex justify-between border-t-[3px] font-bold border-t-white py-[8px] text-[1.3125rem]">
          <h2>{title}</h2>
          <span>${price}</span>
        </div>
        <div className="absolute inset-0 font-black flex flex-col items-center justify-center text-black text-stroke-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="absolute text-[2rem] translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] whitespace-nowrap">
            ADD TO CART
          </p>
          <Image
            src="/images/global.svg"
            alt="globe"
            width={125}
            height={125}
          />
        </div>
      </button>
    </article>
  );
}