import useMenu from "@/state/useMenu";
import { useEffect, useRef } from "react";
import { useCartStore } from "@/state/useCart";
import gsap from "gsap";
import { easeOutExpo } from "@/utils/transitions";
import { CartItem } from "../CartItem/CartItem";
import { useKeyPress } from "@/utils/useKeyPress";
import cn from "clsx";

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
      window.Lenis?.stop();
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
      window.Lenis?.start();
    }
  }, [isMenuOpen]);

  return (
    <>
      <button
        className="border-[1px] text-[0.875rem] md:text-[1.125rem] font-bold border-white px-[21px] py-[12px] md:px-[32px] md:py-[13px] rounded-full"
        onClick={openMenu}
      >
        Cart ({items.length})
      </button>
      <menu
        className={cn(
          "absolute bg-black z-80 right-0 top-0 w-full h-svh md:h-auto md:max-w-[824px] overflow-hidden border-white border-l-[1px] overflow-y-scroll"
        )}
        ref={cartRef}
        style={{ transform: "translateX(300px)", opacity: 0, display: "none" }}
      >
        <div className="relative px-[16px] md:px-[32px]">
          <button
            className="ml-auto flex mt-[18px] md:mt-[42px] uppercase font-bold text-[1.5rem]"
            onClick={closeMenu}
          >
            → Close
          </button>
          <p className="text-[6.5rem] md:text-[7rem] uppercase font-black text-stroke-white">
            Your <span className="text-black">Cart</span>
          </p>
        </div>
        <ul
          className="relative mx-[16px] md:mx-[32px] grid gap-10 md:mb-10 overflow-y-auto md:h-80"
          data-lenis-prevent
        >
          {items.map((item, index) => (
            <CartItem
              item={item}
              src={item.src}
              alt={item.alt}
              key={`cart-item-${index}`}
            />
          ))}
        </ul>
        <div className="px-[16px] mt-auto flex flex-col md:flex-row justify-between font-black uppercase border-white md:border-y-[1px] text-[2.2rem]">
          <h3 className="text-[1.25rem] mt-10 md:mt-0 md:text-[2.1875rem] md:px-[32px] flex justify-between items-center md:gap-[12px]">
            Total: <span>${totalPrice.toFixed(2)}</span>
          </h3>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noreferrer noopener"
            className="md:border-l-[1px] md:border-l-white md:py-[23px] md:px-[32px] border-t-white border-t-[1px] w-full md:w-[unset] text-center text-stroke-white text-black text-[3rem]"
          >
            Checkout
          </a>
        </div>
      </menu>
    </>
  );
}
