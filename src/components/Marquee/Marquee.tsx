import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const Marquee = () => {
  const marqueeRef = useRef(null);
  const text = "A man can't have enough basement swag - ";
  const repeats = 30;

  useEffect(() => {
    const element = marqueeRef.current;

    gsap.fromTo(
      element,
      { xPercent: 0 },
      {
        xPercent: -100,
        repeat: -1,
        duration: 150,
        ease: "linear",
      }
    );
  }, []);

  return (
    <div className="relative z-[-1]">
      <Image
        src="/images/asterisk.svg"
        alt="Asterisk"
        width={160}
        height={168}
        className="absolute left-[90px] top-[-10px] z-20 hidden md:block"
      />
      <div className=" relative flex items-center justify-center overflow-hidden whitespace-nowrap border-y-[1px] border-y-white mt-[22px] md:mt-[56px] mb-[48px] md:mb-[102px]">
        <div
          ref={marqueeRef}
          className="inline-block text-[1.25rem] md:text-[2.1875rem]"
          aria-hidden="true"
        >
          {Array.from({ length: repeats }, (_, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
        <div className="sr-only">{text}</div>
      </div>
      <Image
        src="/images/asterisk-2.svg"
        alt="Asterisk"
        width={160}
        height={168}
        className="absolute right-[90px] top-[-125px] z-10 hidden md:block"
      />
    </div>
  );
};

export default Marquee;
