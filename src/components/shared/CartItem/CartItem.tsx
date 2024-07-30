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
      <div className="bg-custom-gradient w-[234px] h-[231px] flex items-center justify-center">
        <Image src={src} alt={alt} width={210} height={231} />
      </div>
      <div className="ml-[20px] flex flex-col">
        <span className="text-[2.2rem] uppercase font-bold">{item.title}</span>
        <span className="text-[#999999] text-[1.3rem] font-bold">{alt}</span>
        <div className="text-[1.3rem] mt-auto uppercase font-bold">
          <span>Quantity: </span>
          <button
            onClick={() => decreaseQuantity(item.title)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            -
          </button>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(item.title, e)}
            className="w-16 text-center border rounded text-black"
          />
          <button
            onClick={() => increaseQuantity(item.title)}
            className="bg-green-500 text-white px-2 py-1 rounded"
          >
            +
          </button>
          <div>
            <span>Size: </span>
          </div>
          <span className="absolute bottom-[10px] right-[10px] font-bold">
            ${item.price}
          </span>
        </div>
      </div>
    </li>
  );
}
