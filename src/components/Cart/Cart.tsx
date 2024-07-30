import useMenu from "@/state/useMenu";
import styles from "./Cart.module.css";
import { ChangeEvent, useEffect, useRef } from "react";
import Image from "next/image";
import { useCartStore } from "@/state/useCart";

interface CartProps {}

export function Cart(props: CartProps) {
  const cartRef = useRef<HTMLDivElement>(null);
  const { isMenuOpen, openMenu, closeMenu } = useMenu();
  const items = useCartStore((state) => state.items);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const setQuantity = useCartStore((state) => state.setQuantity);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  const handleQuantityChange = (
    title: string,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const quantity = parseInt(event.target.value, 10);
    if (!isNaN(quantity)) {
      setQuantity(title, quantity);
    }
  };

  useEffect(() => {
    getTotalPrice();
  }, [items]);

  return (
    <>
      <button
        className="border-[1px] text-[0.875rem] md:text-[1.125rem] text-[bold] border-white px-[21px] py-[12px] md:px-[32px] md:py-[13px] rounded-full"
        onClick={openMenu}
      >
        Cart (0)
      </button>
      <menu
        className="absolute bg-black z-10 right-0 top-0 w-full h-svh md:w-auto px-[32px]"
        ref={cartRef}
        style={{ display: isMenuOpen ? "block" : "none" }}
      >
        <div className="relative">
          <button
            className="ml-auto flex mt-[42px]"
            onClick={() => {
              closeMenu();
            }}
          >
            → Close
          </button>
          <p className="text-[7rem] uppercase h-auto">Your Cart</p>
        </div>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-4">
              <Image src={item.src} alt={item.alt} width={50} height={50} />
              <span>{item.title}</span>
              <span>${item.price}</span>
              <div className="flex items-center space-x-2">
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
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex">
          <h3 className="uppercase">Total: ${totalPrice.toFixed(2)}</h3>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noreferrer noopener"
          >
            Checkout
          </a>
        </div>
      </menu>
    </>
  );
}
