import useMenu from "@/state/useMenu";
import { ChangeEvent, useEffect, useRef } from "react";
import Image from "next/image";
import { useCartStore } from "@/state/useCart";
import gsap from "gsap";
import { easeOutExpo } from "@/utils/transitions";
import { CartItem } from "../CartItem/CartItem";
import Lenis from "@studio-freight/lenis";
import { useKeyPress } from "@/utils/useKeyPress";

interface CartProps {}

export function Cart(props: CartProps) {
  const cartRef = useRef<HTMLDivElement>(null);
  const isMenuOpen = useMenu((state) => state.isMenuOpen);
  const openMenu = useMenu((state) => state.openMenu);
  const closeMenu = useMenu((state) => state.closeMenu);
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  const handleClickOutside = (event: MouseEvent) => {
    if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useKeyPress("Escape", () => {
    closeMenu();
  });

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
      document.body.classList.remove("overflow-y-hidden");
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
