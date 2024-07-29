import { useEffect, useRef } from "react";
import gsap from "gsap";

const Marquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const element = marqueeRef.current;

    gsap.fromTo(
      element,
      { xPercent: 0 },
      {
        xPercent: -100,
        repeat: -1,
        duration: 36,
        ease: "linear",
      }
    );
  }, []);

  return (
    <div className="flex items-center justify-center overflow-hidden whitespace-nowrap border-y-[1px] border-y-white mt-[22px] md:mt-[56px] mb-[48px] md:mb-[102px]">
      <div ref={marqueeRef} className="inline-block text-[1.25rem] md:text-[2.1875rem]">
        <span>
          A man can't have enough basement swag - {" "}
        </span>
        <span>
          A man can't have enough basement swag - {" "}
        </span>
        <span>
          A man can't have enough basement swag - {" "}
        </span>
        <span>
          A man can't have enough basement swag - {" "}
        </span>
        <span>
          A man can't have enough basement swag - {" "}
        </span>
      </div>
    </div>
  );
};

export default Marquee;
