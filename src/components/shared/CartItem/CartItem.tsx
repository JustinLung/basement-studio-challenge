import { CartItemI, useCartStore } from "@/state/useCart";
import styles from "./CartItem.module.css";
import { ChangeEvent } from "react";
import Image from "next/image";

interface CartItemProps {
  item: CartItemI;
  src: string;
  alt: string;
}

export function CartItem(props: CartItemProps) {
  const { item, src, alt } = props;
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const setQuantity = useCartStore((state) => state.setQuantity);

  const handleQuantityChange = (
    title: string,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const quantity = parseInt(event.target.value, 10);
    if (!isNaN(quantity)) {
      setQuantity(title, quantity);
    }
  };

  return (
    <li className="relative flex border-white border-[1px] p-[14px]">
      <div className="bg-custom-gradient w-[98px] h-[98px] md:w-[234px] md:h-[231px] flex items-center justify-center">
        <Image src={src} alt={alt} width={210} height={231} />
      </div>
      <div className="ml-[20px] flex flex-col">
        <span className="text-[0.875rem] md:text-[2.2rem] uppercase font-bold">
          {item.title}
        </span>
        <span className="text-[#999999] text-[0.6875rem] md:text-[1.3rem] font-bold">
          {alt}
        </span>
        <div className="text-[1.3rem] mt-auto uppercase font-bold">
          <div className="flex items-center gap-[14px]">
            <span className="text-[0.6875rem] md:text-[1.3125rem]">
              Quantity:{" "}
            </span>
            <div className="border-[1px] border-white rounded-full w-fit text-[0.6875rem] md:text-[1.3125rem]">
              <button
                onClick={() => decreaseQuantity(item.title)}
                className="text-white px-2 py-1 rounded"
              >
                -
              </button>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.title, e)}
                className="text-center text-white w-[1rem] md:w-[1.5rem] bg-transparent"
              />
              <button
                onClick={() => increaseQuantity(item.title)}
                className="text-white px-2 py-1 rounded"
              >
                +
              </button>
            </div>
          </div>
          <div>
            <span className="text-[0.6875rem] md:text-[1.3125rem]">Size: </span>
          </div>
          <span className="md:absolute bottom-[10px] right-[10px] font-bold">
            ${item.price}
          </span>
        </div>
      </div>
    </li>
  );
}
