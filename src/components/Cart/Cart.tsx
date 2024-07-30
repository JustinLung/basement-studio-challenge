import useMenu from "@/state/useMenu";
import { ChangeEvent, useEffect, useRef } from "react";
import Image from "next/image";
import { useCartStore } from "@/state/useCart";
import gsap from "gsap";
import { easeOutExpo } from "@/utils/transitions";
import { CartItem } from "../CartItem/CartItem";

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

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(cartRef.current, {
        duration: 0.8,
        x: 0,
        opacity: 1,
        display: "block",
        ease: easeOutExpo,
      });
    } else {
      gsap.to(cartRef.current, {
        duration: 0.8,
        x: 300,
        opacity: 0,
        ease: easeOutExpo,
        onComplete: () => {
          gsap.set(cartRef.current, { display: "none" });
        },
      });
    }
  }, [isMenuOpen]);

  return (
    <>
      <button
        className="border-[1px] text-[0.875rem] md:text-[1.125rem] text-[bold] border-white px-[21px] py-[12px] md:px-[32px] md:py-[13px] rounded-full font-bold"
        onClick={openMenu}
      >
        Cart ({items.length})
      </button>
      <menu
        className="absolute bg-black z-80 right-0 top-0 w-full h-svh md:w-auto max-h-screen overflow-y-auto"
        ref={cartRef}
        style={{ transform: "translateX(300px)", opacity: 0, display: "none" }}
      >
        <div className="relative px-[32px]">
          <button
            className="ml-auto flex mt-[42px] uppercase font-bold text-[1.5rem]"
            onClick={closeMenu}
          >
            → Close
          </button>
          <p className="text-[7rem] uppercase h-auto font-black text-stroke-white">
            Your <span className="text-black">Cart</span>
          </p>
        </div>
        <ul className="mx-[32px] grid gap-10 mb-10 overflow-y-auto">
          {items.map((item, index) => (
            <CartItem
              item={item}
              src={item.src}
              alt={item.alt}
              key={`cart-item-${index}`}
            />
          ))}
        </ul>
        <div className="mt-auto flex justify-between font-black uppercase border-white border-y-[1px] text-[2.2rem]">
          <h3 className="py-[23px] px-[32px]">
            Total: ${totalPrice.toFixed(2)}
          </h3>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noreferrer noopener"
            className="border-l-[1px] border-l-white py-[23px] px-[32px] text-stroke-white text-black"
          >
            Checkout
          </a>
        </div>
      </menu>
    </>
  );
}
