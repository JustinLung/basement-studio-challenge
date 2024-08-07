import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgArrow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    width="20"
    height="14"
    viewBox="0 0 20 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 14L20 7L13 6.11959e-07L11.95 1.05L17.15 6.25L5.46392e-07 6.25L6.77527e-07 7.75L17.15 7.75L11.95 12.95L13 14Z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrow);
export default ForwardRef;
